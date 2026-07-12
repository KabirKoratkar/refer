const SEARCH_URL = "https://r.jina.ai/http://www.bing.com/search";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MAX_QUERY_LENGTH = 180;
const SOCIAL_DOMAINS = [
  "tiktok.com",
  "x.com",
  "twitter.com",
  "knowyourmeme.com",
  "youtube.com",
];

function decodeEntities(value = "") {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function cleanText(value = "") {
  return decodeEntities(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function unwrapSearchUrl(value) {
  try {
    const url = new URL(decodeEntities(value));
    if (url.hostname.endsWith("bing.com") && url.searchParams.get("u")?.startsWith("a1")) {
      return Buffer.from(url.searchParams.get("u").slice(2), "base64").toString("utf8");
    }
    return url.href;
  } catch (error) {
    return "";
  }
}

function classifyUrl(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be" || host.endsWith("youtube.com")) return "Video";
    if (host.endsWith("tiktok.com")) return "TikTok";
    if (host.endsWith("reddit.com")) return "Reddit";
    if (host === "x.com" || host.endsWith("twitter.com")) return "X post";
    if (host.endsWith("instagram.com")) return "Instagram";
    if (/knowyourmeme\.com$|giphy\.com$|tenor\.com$|imgflip\.com$|memedroid\.com$/i.test(host)) return "Meme source";
    return host;
  } catch (error) {
    return "Web";
  }
}

function getYouTubeId(value) {
  try {
    const url = new URL(value);
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("/")[0];
    if (url.hostname.endsWith("youtube.com")) return url.searchParams.get("v") || "";
  } catch (error) {
    return "";
  }
  return "";
}

function parseResults(markdown, group) {
  const results = [];
  const lines = markdown.split(/\r?\n/);

  for (let index = 0; index < lines.length && results.length < 8; index += 1) {
    const match = lines[index].match(/^\d+\.\s+##\s+\[(.+)]\((https?:\/\/[^)]+)\)$/);
    if (!match) continue;

    let snippet = "";
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const value = lines[cursor].trim();
      if (/^\d+\.\s+##\s+\[/.test(value)) break;
      if (value && !snippet) snippet = value;
    }

    const url = unwrapSearchUrl(match[2]);
    if (!/^https?:\/\//i.test(url)) continue;
    const videoId = getYouTubeId(url);
    results.push({
      title: cleanText(match[1].replace(/\*\*/g, "")),
      snippet: cleanText(snippet.replace(/\*\*/g, "")),
      url,
      domain: classifyUrl(url),
      group,
      videoId,
      image: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "",
    });
  }

  return results;
}

async function runSearch(query, group) {
  const url = `${SEARCH_URL}?${new URLSearchParams({ q: query })}`;
  const response = await fetch(url, {
    headers: {
      Accept: "text/plain",
    },
    signal: AbortSignal.timeout(9000),
  });

  if (!response.ok) throw new Error(`Search returned ${response.status}`);
  return parseResults(await response.text(), group);
}

function absoluteUrl(value, base) {
  try {
    return new URL(value, base).href;
  } catch (error) {
    return "";
  }
}

async function findPreviewImage(result) {
  if (!result || result.image) return result?.image || "";

  try {
    const response = await fetch(result.url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ReferPreview/1.0)" },
      redirect: "follow",
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) return "";
    const html = (await response.text()).slice(0, 300000);
    const match = html.match(/<meta[^>]+(?:property|name)=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']og:image["']/i);
    return match ? absoluteUrl(decodeEntities(match[1]), result.url) : "";
  } catch (error) {
    return "";
  }
}

function uniqueResults(groups) {
  const seen = new Set();
  const merged = [];

  groups.flat().forEach((result) => {
    const key = result.url.replace(/[?#].*$/, "").replace(/\/$/, "");
    if (!result.title || seen.has(key)) return;
    seen.add(key);
    merged.push(result);
  });

  return merged.slice(0, 10);
}

function resultScore(result) {
  if (/tiktok\.com\/@[^/]+\/video\/\d+/i.test(result.url)) return 130;
  if (/(?:x\.com|twitter\.com)\/[^/]+\/status\/\d+/i.test(result.url)) return 128;
  if (result.videoId) return 125;

  const scores = {
    TikTok: 110,
    "X post": 108,
    Video: 106,
    "Meme source": 100,
    Instagram: 90,
    Reddit: 88,
  };
  if (scores[result.domain]) return scores[result.domain];
  if (/digitalcultures\.net$/i.test(result.domain)) return 76;
  return 50;
}

function isSocialResult(result) {
  if (["Meme source", "TikTok", "X post", "Reddit", "Instagram", "Video"].includes(result.domain)) return true;
  return /digitalcultures\.net$|memes\.com$|kym-cdn\.com$/i.test(result.domain);
}

function cleanQuery(value) {
  const display = value
    .replace(/^[\s"'“”‘’]+|[\s"'“”‘’]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const search = display.replace(/#/g, "").trim();
  return { display, search };
}

function getSearchLinks(query) {
  return {
    memes: `https://www.google.com/search?q=${encodeURIComponent(`${query} meme`)}`,
    tiktok: `https://www.tiktok.com/search?q=${encodeURIComponent(query)}`,
    x: `https://x.com/search?q=${encodeURIComponent(query)}&src=typed_query`,
  };
}

function parseJsonText(value = "") {
  const cleaned = value.replace(/^```(?:json)?\s*|\s*```$/gi, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end <= start) return null;

  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch (error) {
    return null;
  }
}

function collectClaudeSources(content = []) {
  const sources = [];

  content.forEach((block) => {
    if (block.type === "web_search_tool_result" && Array.isArray(block.content)) {
      block.content.forEach((result) => {
        if (result.type === "web_search_result" && result.url) {
          sources.push({ title: result.title || "Social result", url: result.url, snippet: "" });
        }
      });
    }

    if (block.type === "text" && Array.isArray(block.citations)) {
      block.citations.forEach((citation) => {
        if (citation.type === "web_search_result_location" && citation.url) {
          sources.push({
            title: citation.title || "Social result",
            url: citation.url,
            snippet: cleanText(citation.cited_text || ""),
          });
        }
      });
    }
  });

  return uniqueResults([sources.map((source) => ({
    ...source,
    domain: classifyUrl(source.url),
    group: "Claude web search",
    videoId: getYouTubeId(source.url),
    image: "",
  }))]).filter(isSocialResult);
}

function normalizeClaudeResults(message) {
  const text = (message.content || [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
  const parsed = parseJsonText(text);
  const cited = collectClaudeSources(message.content);
  const sourceByUrl = new Map(cited.map((result) => [result.url.replace(/\/$/, ""), result]));

  const modelResults = Array.isArray(parsed?.results) ? parsed.results : [];
  const normalized = modelResults.map((result) => {
    const url = absoluteUrl(String(result.url || ""));
    if (!url) return null;
    const citedResult = sourceByUrl.get(url.replace(/\/$/, ""));
    const videoId = getYouTubeId(url);
    return {
      title: cleanText(String(result.title || citedResult?.title || "Social result")),
      snippet: cleanText(String(result.snippet || citedResult?.snippet || "Open the source to see the reference.")),
      url,
      domain: classifyUrl(url),
      group: "Claude web search",
      videoId,
      image: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "",
    };
  }).filter(Boolean).filter(isSocialResult);

  return uniqueResults([normalized, cited])
    .sort((a, b) => resultScore(b) - resultScore(a))
    .slice(0, 6);
}

async function requestClaude(messages) {
  const apiResponse = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
    },
    body: JSON.stringify({
      model: "claude-sonnet-5",
      max_tokens: 1200,
      system: "You identify internet references. Search live social and meme sources, not encyclopedias. Prefer the original post or exact clip over pages discussing it. Never invent a URL.",
      messages,
      tools: [{
        type: "web_search_20250305",
        name: "web_search",
        max_uses: 2,
        allowed_domains: SOCIAL_DOMAINS,
        user_location: {
          type: "approximate",
          country: "US",
          timezone: "America/Los_Angeles",
        },
      }],
    }),
    signal: AbortSignal.timeout(25000),
  });

  if (!apiResponse.ok) throw new Error("Reference search unavailable");
  return apiResponse.json();
}

async function searchWithClaude(query) {
  const prompt = `Search the web to identify this reference: "${query}".

Treat it as an internet-culture lookup, not a dictionary lookup. Search using the phrase plus terms such as meme, TikTok, Twitter, X, viral, sound, or quote. Prioritize, in order:
1. the original TikTok or X/Twitter post;
2. the exact YouTube clip;
3. a Know Your Meme origin page;
4. a strong meme explainer when the original post is not indexed.

Return only valid JSON with this shape:
{"results":[{"title":"recognizable reference name","url":"direct URL from your search results","snippet":"one short sentence saying what it is and where it came from"}]}
Include up to five ranked results. Do not return Wikipedia or a generic page about quotation marks, hashtags, or individual words.`;
  const messages = [{ role: "user", content: prompt }];
  let message = await requestClaude(messages);

  if (message.stop_reason === "pause_turn") {
    message = await requestClaude([...messages, { role: "assistant", content: message.content }]);
  }

  return normalizeClaudeResults(message);
}

async function searchWithoutClaude(query) {
  const results = await runSearch(`${query} meme TikTok Twitter viral`, "Social");
  return uniqueResults([results]).filter(isSocialResult).sort((a, b) => resultScore(b) - resultScore(a));
}

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Cache-Control", "no-store");

  if (request.method === "OPTIONS") return response.status(204).end();
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });

  const rawQuery = String(request.query.q || "").trim().slice(0, MAX_QUERY_LENGTH);
  const query = cleanQuery(rawQuery);
  if (query.search.length < 2) return response.status(400).json({ error: "Enter a longer reference" });

  let results = [];
  try {
    results = process.env.ANTHROPIC_API_KEY
      ? await searchWithClaude(query.search)
      : await searchWithoutClaude(query.search);
  } catch (error) {
    try {
      results = await searchWithoutClaude(query.search);
    } catch (fallbackError) {
      results = [];
    }
  }

  if (!results.length) {
    return response.status(502).json({ error: "No indexed sources found", results: [] });
  }

  const explanatoryResult = results.find((result) => result.domain === "Meme source" && result.snippet);
  if (!results[0].snippet) {
    results[0].snippet = explanatoryResult?.snippet || "Open the original post to see this reference in context.";
  }

  results[0].image = await findPreviewImage(results[0]);

  response.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
  return response.status(200).json({
    query: query.display,
    results,
    searches: getSearchLinks(query.display),
  });
};

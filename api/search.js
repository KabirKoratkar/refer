const SEARCH_URL = "https://r.jina.ai/http://www.bing.com/search";
const MAX_QUERY_LENGTH = 180;

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
    if (host.endsWith("knowyourmeme.com")) return "Meme source";
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
  const scores = {
    "Meme source": 100,
    Video: 90,
    TikTok: 85,
    Reddit: 82,
    "X post": 80,
    Instagram: 78,
  };
  if (scores[result.domain]) return scores[result.domain];
  if (/wikipedia\.org$/i.test(result.domain)) return 76;
  if (/digitalcultures\.net$/i.test(result.domain)) return 72;
  return 50;
}

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Cache-Control", "no-store");

  if (request.method === "OPTIONS") return response.status(204).end();
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });

  const query = String(request.query.q || "").trim().slice(0, MAX_QUERY_LENGTH);
  if (query.length < 2) return response.status(400).json({ error: "Enter a longer reference" });

  const searches = [[`"${query}" reference origin meme quote`, "Web"]];

  const settled = await Promise.allSettled(searches.map(([value, group]) => runSearch(value, group)));
  const results = uniqueResults(settled.filter((item) => item.status === "fulfilled").map((item) => item.value))
    .sort((a, b) => resultScore(b) - resultScore(a));

  if (!results.length) {
    return response.status(502).json({ error: "No indexed sources found", results: [] });
  }

  if (results[0].domain === "Meme source") {
    const explanatoryResult = results.find((result) => /\b(is a|refers to|comes from|famous quote)\b/i.test(result.snippet));
    if (explanatoryResult) results[0].snippet = explanatoryResult.snippet;
  }

  results[0].image = await findPreviewImage(results[0]);

  response.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
  return response.status(200).json({
    query,
    results,
    searches: {
      web: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      images: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`,
      reddit: `https://www.reddit.com/search/?q=${encodeURIComponent(query)}`,
      tiktok: `https://www.tiktok.com/search?q=${encodeURIComponent(query)}`,
      x: `https://x.com/search?q=${encodeURIComponent(query)}&src=typed_query`,
      youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    },
  });
};

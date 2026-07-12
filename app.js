const references = [
  {
    title: "May the Force be with you",
    source: "Star Wars",
    medium: "Movie",
    year: "1977",
    quote: "May the Force be with you.",
    phrases: ["may the force be with you", "the force is strong with this one"],
    explanation: "A wish for good luck from the Star Wars universe. The Force is the energy that connects all living things.",
    wikiQuery: "May the Force be with you Star Wars",
    thumbnail: "https://image.tmdb.org/t/p/w780/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  },
  {
    title: "I'll be back",
    source: "The Terminator",
    medium: "Movie",
    year: "1984",
    quote: "I'll be back.",
    phrases: ["i'll be back", "ill be back"],
    explanation: "Arnold Schwarzenegger's understated promise before the Terminator returns in spectacular fashion. It now signals a dramatic comeback.",
    wikiQuery: "I'll be back Terminator quote",
    thumbnail: "https://image.tmdb.org/t/p/w780/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
  },
  {
    title: "You shall not pass",
    source: "The Lord of the Rings",
    medium: "Book + movie",
    year: "1954 / 2001",
    quote: "You shall not pass!",
    phrases: ["you shall not pass"],
    explanation: "Gandalf's stand against the Balrog. People use it for any firm or playfully overdramatic refusal.",
    wikiQuery: "You Shall Not Pass Gandalf",
    thumbnail: "https://image.tmdb.org/t/p/w780/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    title: "Winter is coming",
    source: "Game of Thrones",
    medium: "TV + book",
    year: "1996 / 2011",
    quote: "Winter is coming.",
    phrases: ["winter is coming"],
    explanation: "House Stark's warning to stay prepared because hard times always return, even during peaceful moments.",
    wikiQuery: "Winter Is Coming Game of Thrones",
  },
  {
    title: "How you doin'?",
    source: "Friends",
    medium: "TV",
    year: "1994",
    quote: "How you doin'?",
    phrases: ["how you doin", "how are you doing joey"],
    explanation: "Joey Tribbiani's signature pickup line, usually delivered with exaggerated confidence.",
    wikiQuery: "How you doin Joey Friends",
  },
  {
    title: "That's what she said",
    source: "The Office",
    medium: "TV",
    year: "2005",
    quote: "That's what she said.",
    phrases: ["that's what she said", "thats what she said"],
    explanation: "A running Michael Scott joke that turns an innocent sentence into an innuendo.",
    wikiQuery: "That's what she said The Office",
  },
  {
    title: "We were on a break",
    source: "Friends",
    medium: "TV",
    year: "1997",
    quote: "We were on a break!",
    phrases: ["we were on a break"],
    explanation: "Ross's endlessly repeated defense after his breakup with Rachel. It references a famously unresolved relationship argument.",
    wikiQuery: "We were on a break Friends",
  },
  {
    title: "Bazinga!",
    source: "The Big Bang Theory",
    medium: "TV",
    year: "2008",
    quote: "Bazinga!",
    phrases: ["bazinga"],
    explanation: "Sheldon Cooper's catchphrase for revealing that he has played a joke or prank.",
    wikiQuery: "Bazinga Big Bang Theory",
  },
  {
    title: "On Wednesdays we wear pink",
    source: "Mean Girls",
    medium: "Movie",
    year: "2004",
    quote: "On Wednesdays, we wear pink.",
    phrases: ["on wednesdays we wear pink", "we wear pink on wednesdays"],
    explanation: "One of the Plastics' strict social rules. It now playfully labels a group dress code or ritual.",
    wikiQuery: "On Wednesdays we wear pink Mean Girls",
    thumbnail: "https://image.tmdb.org/t/p/w780/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
  },
  {
    title: "Stop trying to make fetch happen",
    source: "Mean Girls",
    medium: "Movie",
    year: "2004",
    quote: "Stop trying to make fetch happen.",
    phrases: ["stop trying to make fetch happen", "fetch happen", "that's so fetch", "thats so fetch"],
    explanation: "Regina George rejects Gretchen's attempt to invent slang. Use it when someone keeps pushing an idea that is not catching on.",
    wikiQuery: "Fetch Mean Girls quote",
    thumbnail: "https://image.tmdb.org/t/p/w780/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
  },
  {
    title: "I volunteer as tribute",
    source: "The Hunger Games",
    medium: "Book + movie",
    year: "2008 / 2012",
    quote: "I volunteer as tribute!",
    phrases: ["i volunteer as tribute"],
    explanation: "Katniss volunteers to take her sister's place in a deadly competition. Online, it is a dramatic way to volunteer for anything.",
    wikiQuery: "I volunteer as tribute Hunger Games",
    thumbnail: "https://image.tmdb.org/t/p/w780/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg",
  },
  {
    title: "Dobby is a free elf",
    source: "Harry Potter",
    medium: "Book + movie",
    year: "1998 / 2002",
    quote: "Dobby is a free elf.",
    phrases: ["dobby is a free elf", "master has given dobby a sock"],
    explanation: "Dobby celebrates being freed after receiving a sock. It is used for sudden freedom from work, school, or an obligation.",
    wikiQuery: "Dobby free elf sock",
  },
  {
    title: "One does not simply walk into Mordor",
    source: "The Lord of the Rings",
    medium: "Movie meme",
    year: "2001",
    quote: "One does not simply walk into Mordor.",
    phrases: ["one does not simply", "walk into mordor"],
    explanation: "Boromir warns that reaching Mordor is nearly impossible. The meme format points out that a task is far harder than it sounds.",
    wikiQuery: "One Does Not Simply meme",
    thumbnail: "https://image.tmdb.org/t/p/w780/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    title: "Red pill or blue pill",
    source: "The Matrix",
    medium: "Movie",
    year: "1999",
    quote: "You take the red pill... and I show you how deep the rabbit hole goes.",
    phrases: ["red pill or blue pill", "take the red pill", "take the blue pill"],
    explanation: "Morpheus offers Neo a choice between uncomfortable truth and comfortable illusion. It now describes a life-changing choice of perspective.",
    wikiQuery: "Red pill and blue pill Matrix",
    thumbnail: "https://image.tmdb.org/t/p/w780/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "Why so serious?",
    source: "The Dark Knight",
    medium: "Movie",
    year: "2008",
    quote: "Why so serious?",
    phrases: ["why so serious"],
    explanation: "The Joker's taunt became shorthand for telling someone to loosen up, often with a slightly chaotic edge.",
    wikiQuery: "Why so serious Dark Knight",
    thumbnail: "https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Here's Johnny!",
    source: "The Shining",
    medium: "Movie",
    year: "1980",
    quote: "Here's Johnny!",
    phrases: ["here's johnny", "heres johnny"],
    explanation: "Jack Torrance announces himself through a broken door, borrowing Johnny Carson's TV introduction. It signals an unhinged entrance.",
    wikiQuery: "Here's Johnny The Shining",
  },
  {
    title: "The limit does not exist",
    source: "Mean Girls",
    medium: "Movie",
    year: "2004",
    quote: "The limit does not exist!",
    phrases: ["the limit does not exist"],
    explanation: "Cady solves the final Mathletes problem and realizes she does not need to limit herself either. It is both a calculus answer and a triumphant punchline.",
    wikiQuery: "The limit does not exist Mean Girls",
    thumbnail: "https://image.tmdb.org/t/p/w780/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
  },
  {
    title: "I am the danger",
    source: "Breaking Bad",
    medium: "TV",
    year: "2011",
    quote: "I am the one who knocks!",
    phrases: ["i am the danger", "i am the one who knocks", "i'm the one who knocks"],
    explanation: "Walter White insists he is no longer a victim but the threat itself. It is quoted for an outsized show of confidence.",
    wikiQuery: "I am the danger Breaking Bad",
  },
  {
    title: "No soup for you",
    source: "Seinfeld",
    medium: "TV",
    year: "1995",
    quote: "No soup for you!",
    phrases: ["no soup for you"],
    explanation: "The Soup Nazi refuses service to customers who break his strict ordering rules. It is a mock-stern way to deny someone something.",
    wikiQuery: "No soup for you Seinfeld",
  },
  {
    title: "Big Brother is watching you",
    source: "Nineteen Eighty-Four",
    medium: "Book",
    year: "1949",
    quote: "Big Brother is watching you.",
    phrases: ["big brother is watching you", "big brother is watching"],
    explanation: "George Orwell's warning about constant government surveillance. The phrase now calls out intrusive monitoring or loss of privacy.",
    wikiQuery: "Big Brother Nineteen Eighty-Four",
  },
  {
    title: "The cake is a lie",
    source: "Portal",
    medium: "Video game",
    year: "2007",
    quote: "The cake is a lie.",
    phrases: ["the cake is a lie"],
    explanation: "Hidden graffiti warns Portal's test subject that the promised reward is fake. It means an incentive or promise cannot be trusted.",
    wikiQuery: "The cake is a lie Portal",
  },
  {
    title: "This is fine",
    source: "Gunshow webcomic",
    medium: "Internet meme",
    year: "2013",
    quote: "This is fine.",
    phrases: ["this is fine"],
    explanation: "A dog calmly drinks coffee while the room burns. The meme captures pretending everything is okay during obvious disaster.",
    wikiQuery: "This Is Fine meme",
  },
  {
    title: "Very demure, very mindful",
    source: "Jools Lebron TikTok",
    medium: "TikTok",
    year: "2024",
    quote: "Very demure, very mindful.",
    phrases: ["very demure very mindful", "very demure", "very mindful"],
    explanation: "Jools Lebron's playful description of being restrained and considerate became a way to label almost any behavior as tastefully low-key.",
    wikiQuery: "Very demure very mindful Jools Lebron",
  },
  {
    title: "Girl dinner",
    source: "TikTok trend",
    medium: "TikTok",
    year: "2023",
    quote: "Girl dinner.",
    phrases: ["girl dinner"],
    explanation: "A TikTok trend for an improvised meal made of snacks, small bites, or whatever is already around rather than a traditional entree.",
    wikiQuery: "Girl dinner TikTok trend",
  },
  {
    title: "My Roman Empire",
    source: "TikTok trend",
    medium: "TikTok",
    year: "2023",
    quote: "That's my Roman Empire.",
    phrases: ["my roman empire", "your roman empire", "roman empire trend"],
    explanation: "After a TikTok trend revealed how often some men think about ancient Rome, a 'Roman Empire' became any oddly specific topic you think about constantly.",
    wikiQuery: "Roman Empire TikTok trend",
  },
  {
    title: "Delulu is the solulu",
    source: "TikTok slang",
    medium: "TikTok",
    year: "2023",
    quote: "Delulu is the solulu.",
    phrases: ["delulu is the solulu", "delulu", "solulu"],
    explanation: "Playful internet shorthand for 'delusion is the solution': acting as if your optimistic fantasy will become real.",
    wikiQuery: "Delulu internet slang",
  },
];

const ui = {
  listenButton: document.querySelector("#listen-button"),
  listenButtonLabel: document.querySelector("#listen-button span"),
  sampleButton: document.querySelector("#sample-button"),
  searchButton: document.querySelector("#search-button"),
  searchInput: document.querySelector("#reference-search"),
  transcript: document.querySelector("#transcript"),
  clearButton: document.querySelector("#clear-button"),
  liveBadge: document.querySelector("#live-badge"),
  liveLabel: document.querySelector("#live-label"),
  waveform: document.querySelector("#waveform"),
  emptyState: document.querySelector("#empty-state"),
  resultContent: document.querySelector("#result-content"),
  historyGrid: document.querySelector("#history-grid"),
  clearHistory: document.querySelector("#clear-history"),
  supportNote: document.querySelector("#support-note"),
  toast: document.querySelector("#toast"),
};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let committedTranscript = "";
let sampleIndex = 0;
let toastTimer = null;

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value = "") {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

function findCatalogMatch(input) {
  const normalized = normalize(input);
  if (!normalized) return null;

  const directMatch = references.find((reference) =>
    reference.phrases.some((phrase) => normalized.includes(normalize(phrase))) ||
    normalized === normalize(reference.title) ||
    normalized === normalize(reference.source)
  );
  if (directMatch) return { ...directMatch, confidence: "Strong match" };

  const inputTokens = new Set(normalized.split(" ").filter((token) => token.length > 2));
  let best = null;
  let bestScore = 0;

  references.forEach((reference) => {
    const haystack = normalize(`${reference.title} ${reference.source} ${reference.phrases.join(" ")}`);
    const referenceTokens = new Set(haystack.split(" ").filter((token) => token.length > 2));
    const overlap = [...inputTokens].filter((token) => referenceTokens.has(token)).length;
    const score = overlap / Math.max(1, Math.min(inputTokens.size, 5));
    if (score > bestScore) {
      best = reference;
      bestScore = score;
    }
  });

  return bestScore >= 0.55 ? { ...best, confidence: "Likely match" } : null;
}

function extractReferenceCue(input) {
  const cues = [
    /(?:it'?s|that'?s) (?:giving|so) (.+)$/i,
    /(?:just )?like (?:in |from )?(.+)$/i,
    /reminds? me of (.+)$/i,
    /reference to (.+)$/i,
  ];
  for (const cue of cues) {
    const match = input.match(cue);
    if (match?.[1] && match[1].trim().split(/\s+/).length <= 8) return match[1].trim();
  }
  return "";
}

async function searchWikipedia(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "5",
    prop: "pageimages|extracts|info",
    inprop: "url",
    piprop: "thumbnail|name|original",
    pithumbsize: "900",
    exintro: "1",
    explaintext: "1",
    exsentences: "3",
    format: "json",
    origin: "*",
  });

  const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
  if (!response.ok) throw new Error("Source search failed");
  const data = await response.json();
  return Object.values(data.query?.pages || {}).sort((a, b) => (a.index || 99) - (b.index || 99));
}

async function enrichReference(reference) {
  try {
    const pages = await searchWikipedia(reference.wikiQuery || `${reference.title} ${reference.source}`);
    const page = pages[0];
    if (!page) return reference;
    return {
      ...reference,
      thumbnail: page.thumbnail?.source || page.original?.source || reference.thumbnail || "",
      sourceUrl: page.fullurl || "",
    };
  } catch (error) {
    return reference;
  }
}

function wikipediaFallback(page, query) {
  const firstSentence = page.extract?.split(/(?<=[.!?])\s/)[0] || "This may be the reference you heard. Open the source to confirm the context.";
  return {
    title: page.title,
    source: "Wikipedia result",
    medium: "Possible reference",
    year: "",
    quote: `You searched for “${query}”`,
    explanation: firstSentence,
    confidence: "Possible match",
    thumbnail: page.thumbnail?.source || page.original?.source || "",
    sourceUrl: page.fullurl || "",
    wikiQuery: query,
  };
}

function setLoading() {
  ui.emptyState.hidden = true;
  ui.resultContent.hidden = false;
  ui.resultContent.innerHTML = `
    <div class="loading-state">
      <div><i data-lucide="loader-circle"></i><p>Connecting the dots...</p></div>
    </div>
  `;
  refreshIcons();
}

async function resolveReference(input, options = {}) {
  const query = input.trim();
  if (!query) {
    showToast("Say or type a reference first.");
    ui.searchInput.focus();
    return;
  }

  setLoading();
  let match = findCatalogMatch(query);

  if (match) {
    match = await enrichReference(match);
    renderResult(match);
    saveToHistory(match);
    return;
  }

  const cue = options.fromSpeech ? extractReferenceCue(query) : query;
  if (!cue) {
    showEmptyMessage("No clear reference yet", "Keep talking or try the key phrase again. We only interrupt when there is a useful match.");
    return;
  }

  try {
    const pages = await searchWikipedia(`${cue} film television book meme TikTok`);
    if (!pages.length) throw new Error("No matches");
    const result = wikipediaFallback(pages[0], cue);
    renderResult(result);
    saveToHistory(result);
  } catch (error) {
    showEmptyMessage("That one slipped past us", "Try a title, a longer part of the quote, or the character who said it.");
  }
}

function getDiscoveryUrl(reference) {
  const query = encodeURIComponent(`${reference.quote || reference.title} ${reference.source}`);
  if (reference.medium.toLowerCase().includes("tiktok")) {
    return `https://www.tiktok.com/search?q=${query}`;
  }
  return `https://www.youtube.com/results?search_query=${query}`;
}

function renderResult(reference) {
  ui.emptyState.hidden = true;
  ui.resultContent.hidden = false;
  const image = reference.thumbnail
    ? `<img class="result-image" src="${escapeHtml(reference.thumbnail)}" alt="${escapeHtml(reference.source)}" />`
    : `<div class="result-image-fallback"><i data-lucide="clapperboard"></i></div>`;
  const sourceLink = reference.sourceUrl || `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(reference.wikiQuery || reference.title)}`;

  ui.resultContent.innerHTML = `
    <div class="result-image-wrap">
      ${image}
      <span class="match-tag">${escapeHtml(reference.confidence || "Strong match")}</span>
    </div>
    <div class="result-meta">
      <span class="medium-tag">${escapeHtml(reference.medium)}</span>
      <span class="result-year">${escapeHtml(reference.year || "Source found")}</span>
    </div>
    <h2>${escapeHtml(reference.title)}</h2>
    <p class="result-source">From ${escapeHtml(reference.source)}</p>
    <blockquote class="result-quote">${escapeHtml(reference.quote)}</blockquote>
    <p class="result-explanation">${escapeHtml(reference.explanation)}</p>
    <div class="result-actions">
      <a class="action-link" href="${escapeHtml(sourceLink)}" target="_blank" rel="noopener noreferrer">
        <i data-lucide="book-open"></i><span>Get the context</span>
      </a>
      <a class="action-link secondary" href="${getDiscoveryUrl(reference)}" target="_blank" rel="noopener noreferrer">
        <i data-lucide="play"></i><span>Find the moment</span>
      </a>
    </div>
  `;
  refreshIcons();
}

function showEmptyMessage(title, message) {
  ui.resultContent.hidden = true;
  ui.emptyState.hidden = false;
  ui.emptyState.querySelector("h2").textContent = title;
  ui.emptyState.querySelector("p:not(.section-label)").textContent = message;
}

function saveToHistory(reference) {
  const history = getHistory().filter((item) => item.title !== reference.title);
  history.unshift({ ...reference, savedAt: new Date().toISOString() });
  localStorage.setItem("catchThatHistory", JSON.stringify(history.slice(0, 6)));
  renderHistory();
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("catchThatHistory")) || [];
  } catch (error) {
    return [];
  }
}

function renderHistory() {
  const history = getHistory();
  ui.clearHistory.hidden = history.length === 0;

  if (!history.length) {
    ui.historyGrid.innerHTML = `<div class="history-empty">References you catch will stay here for a quick rewind.</div>`;
    return;
  }

  ui.historyGrid.innerHTML = history.map((item, index) => {
    const thumb = item.thumbnail
      ? `<img class="history-thumb" src="${escapeHtml(item.thumbnail)}" alt="" />`
      : `<span class="history-thumb history-thumb-fallback"><i data-lucide="clapperboard"></i></span>`;
    const date = new Date(item.savedAt);
    const time = Number.isNaN(date.getTime()) ? "Recently" : new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" }).format(date);
    return `
      <button class="history-card" type="button" data-history-index="${index}">
        ${thumb}
        <span>
          <span class="history-meta"><span class="history-type">${escapeHtml(item.medium)}</span><span>${escapeHtml(time)}</span></span>
          <h3>${escapeHtml(item.title)}</h3>
          <span class="history-meta">${escapeHtml(item.source)}</span>
        </span>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-history-index]").forEach((button) => {
    button.addEventListener("click", () => {
      renderResult(history[Number(button.dataset.historyIndex)]);
      document.querySelector("#result-panel").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  refreshIcons();
}

function setListening(nextState) {
  isListening = nextState;
  ui.listenButton.classList.toggle("listening", nextState);
  ui.waveform.classList.toggle("active", nextState);
  ui.liveBadge.classList.toggle("listening", nextState);
  ui.listenButtonLabel.textContent = nextState ? "Stop listening" : "Start listening";
  ui.liveLabel.textContent = nextState ? "Live" : "Ready";
  ui.listenButton.querySelector("svg")?.remove();
  const icon = document.createElement("i");
  icon.dataset.lucide = nextState ? "square" : "mic";
  ui.listenButton.prepend(icon);
  refreshIcons();
}

function setupRecognition() {
  if (!SpeechRecognition) {
    ui.supportNote.textContent = "Live listening is not supported here. Type the reference above instead.";
    ui.listenButton.disabled = true;
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    let interim = "";
    let finalText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0].transcript;
      if (event.results[index].isFinal) finalText += `${text} `;
      else interim += text;
    }

    if (finalText) {
      committedTranscript = `${committedTranscript} ${finalText}`.trim();
      resolveReference(finalText, { fromSpeech: true });
    }
    ui.transcript.textContent = `${committedTranscript} ${interim}`.trim() || "Listening...";
    ui.transcript.classList.add("has-text");
  };

  recognition.onend = () => {
    if (isListening) {
      try { recognition.start(); } catch (error) { setListening(false); }
    }
  };

  recognition.onerror = (event) => {
    if (event.error === "no-speech") return;
    setListening(false);
    const message = event.error === "not-allowed"
      ? "Microphone access is off. Allow it in your browser or use the search box."
      : "Listening paused. Try again or use the search box.";
    showToast(message);
  };
}

function toggleListening() {
  if (!recognition) return;
  if (isListening) {
    setListening(false);
    recognition.stop();
  } else {
    try {
      recognition.start();
      setListening(true);
      ui.transcript.textContent = "Listening...";
      ui.transcript.classList.add("has-text");
    } catch (error) {
      showToast("Listening is already starting.");
    }
  }
}

function trySample() {
  const samples = [
    "Honestly, the limit does not exist.",
    "This meeting is very demure, very mindful.",
    "Fine, I volunteer as tribute.",
    "That deadline is my Roman Empire.",
  ];
  const sample = samples[sampleIndex % samples.length];
  sampleIndex += 1;
  committedTranscript = sample;
  ui.transcript.textContent = sample;
  ui.transcript.classList.add("has-text");
  resolveReference(sample, { fromSpeech: true });
}

function clearTranscript() {
  committedTranscript = "";
  ui.transcript.textContent = "Your conversation will appear here while listening.";
  ui.transcript.classList.remove("has-text");
}

function showToast(message) {
  clearTimeout(toastTimer);
  ui.toast.textContent = message;
  ui.toast.classList.add("show");
  toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 3200);
}

function refreshIcons() {
  window.lucide?.createIcons({ attrs: { "stroke-width": 2 } });
}

ui.listenButton.addEventListener("click", toggleListening);
ui.sampleButton.addEventListener("click", trySample);
ui.clearButton.addEventListener("click", clearTranscript);
ui.searchButton.addEventListener("click", () => resolveReference(ui.searchInput.value));
ui.searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") resolveReference(ui.searchInput.value);
});
ui.clearHistory.addEventListener("click", () => {
  localStorage.removeItem("catchThatHistory");
  renderHistory();
  showToast("History cleared.");
});
document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    ui.searchInput.value = button.dataset.example;
    resolveReference(button.dataset.example);
  });
});

setupRecognition();
renderHistory();
refreshIcons();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
}

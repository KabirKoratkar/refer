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
    embedId: "3bReJswiMGM",
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
    clipUrl: "https://clip.cafe/the-office-2005/thats-what-she/",
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
    clipUrl: "https://clip.cafe/mean-girls-2004/the-limit-does-not-exist/",
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
    clipUrl: "https://www.rottentomatoes.com/tv/breaking_bad/videos/e89VCQr_2eKl",
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
    clipUrl: "https://clip.cafe/seinfeld-1989/i-didnt-get-any-bread-just-forget-it-let-go/",
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
    clipUrl: "https://gunshowcomic.com/648",
    clipLabel: "Open original comic",
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
    clipUrl: "https://www.tiktok.com/@joolieannie",
    clipLabel: "Open original creator",
    exact: false,
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
  {
    title: "It's corn",
    source: "Corn Kid / Recess Therapy",
    medium: "TikTok sound",
    year: "2022",
    quote: "It's corn! A big lump with knobs. It has the juice.",
    phrases: ["it's corn", "its corn", "a big lump with knobs", "it has the juice", "corn kid"],
    explanation: "Tariq's enthusiastic interview about corn was remixed into a viral song and TikTok sound.",
    wikiQuery: "Corn Kid It's Corn meme",
    clipUrl: "https://www.youtube.com/watch?v=1VbZE6YhjKk",
    clipLabel: "Play original interview",
    embedId: "1VbZE6YhjKk",
  },
  {
    title: "Looking for a man in finance",
    source: "Megan Boni / @girl_on_couch",
    medium: "TikTok sound",
    year: "2024",
    quote: "I'm looking for a man in finance, trust fund, 6'5\", blue eyes.",
    phrases: ["looking for a man in finance", "man in finance", "trust fund six five blue eyes", "six five blue eyes"],
    explanation: "Megan Boni's improvised parody of hyper-specific dating standards became a remixed TikTok anthem.",
    wikiQuery: "Looking for a Man in Finance TikTok",
    clipUrl: "https://www.tiktok.com/@girl_on_couch",
    clipLabel: "Open original creator",
    exact: false,
  },
  {
    title: "Hawk tuah",
    source: "Haliey Welch street interview",
    medium: "TikTok meme",
    year: "2024",
    quote: "Hawk tuah.",
    phrases: ["hawk tuah", "hawk tua", "spit on that thing"],
    explanation: "A response from a viral Nashville street interview that became a widely remixed catchphrase.",
    wikiQuery: "Hawk Tuah meme",
  },
  {
    title: "Bombastic side eye",
    source: "TikTok reaction sound",
    medium: "TikTok sound",
    year: "2022",
    quote: "Bombastic side eye. Criminal offensive side eye.",
    phrases: ["bombastic side eye", "criminal offensive side eye", "side eye"],
    explanation: "A dramatic audio reaction used when someone says or does something suspicious, awkward, or out of line.",
    wikiQuery: "Bombastic side eye TikTok meme",
  },
  {
    title: "Oh no, our table",
    source: "America's Funniest Home Videos clip",
    medium: "TikTok sound",
    year: "2021",
    quote: "Oh no! Our table! It's broken!",
    phrases: ["oh no our table", "our table it's broken", "our table is broken"],
    explanation: "A child's calm reaction to a glass table collapsing became a TikTok sound for predictable disasters.",
    wikiQuery: "Oh No Our Table It's Broken meme",
    clipUrl: "https://knowyourmeme.com/memes/oh-no-our-table-its-broken",
    clipLabel: "Open original clip",
  },
  {
    title: "Ice cream so good",
    source: "Pinkydoll NPC livestreams",
    medium: "TikTok Live",
    year: "2023",
    quote: "Ice cream so good. Gang gang. Yes yes yes.",
    phrases: ["ice cream so good", "gang gang yes yes yes", "npc livestream", "npc live"],
    explanation: "Pinkydoll repeated scripted reactions to virtual gifts, popularizing the NPC livestream format.",
    wikiQuery: "Pinkydoll ice cream so good NPC livestream",
    clipUrl: "https://www.tiktok.com/@pinkydollreal",
    clipLabel: "Open original creator",
    exact: false,
  },
  {
    title: "Girl math",
    source: "TikTok trend",
    medium: "TikTok",
    year: "2023",
    quote: "That's girl math.",
    phrases: ["girl math", "basically free", "if i pay cash it's free", "if i return it i made money"],
    explanation: "A joking system of logic that reframes spending decisions, like treating cash purchases or refunds as free money.",
    wikiQuery: "Girl math TikTok trend",
  },
  {
    title: "Aura points",
    source: "TikTok slang",
    medium: "TikTok",
    year: "2024",
    quote: "Minus aura points.",
    phrases: ["aura points", "minus aura", "lost aura", "infinite aura"],
    explanation: "An imaginary score for how cool, confident, or embarrassing someone looks in a moment.",
    wikiQuery: "Aura points TikTok slang",
  },
  {
    title: "Beige flag",
    source: "TikTok dating trend",
    medium: "TikTok",
    year: "2023",
    quote: "That's a beige flag.",
    phrases: ["beige flag", "his beige flag", "her beige flag"],
    explanation: "A partner's harmless but oddly specific habit: not a red flag, not a green flag, just memorable.",
    wikiQuery: "Beige flag TikTok trend",
  },
  {
    title: "Holding space for Defying Gravity",
    source: "Wicked press interview",
    medium: "Viral interview",
    year: "2024",
    quote: "People are taking the lyrics of Defying Gravity and really holding space with that.",
    phrases: ["holding space for defying gravity", "holding space with that", "people are taking the lyrics"],
    explanation: "A sincere Wicked interview exchange became a meme because the phrase felt unusually intense and abstract.",
    wikiQuery: "Holding space Defying Gravity meme interview",
  },
  {
    title: "Chill guy",
    source: "Phillip Banks character",
    medium: "Internet meme",
    year: "2024",
    quote: "I'm just a chill guy.",
    phrases: ["just a chill guy", "i'm a chill guy", "im a chill guy", "chill guy"],
    explanation: "An easygoing dog character used to describe staying unbothered, often while the situation is clearly not relaxed.",
    wikiQuery: "Chill Guy meme Phillip Banks",
    clipUrl: "https://knowyourmeme.com/memes/just-a-chill-guy-my-new-character",
    clipLabel: "Open original meme",
  },
  {
    title: "Surprised Pikachu",
    source: "Pokemon anime reaction image",
    medium: "Internet meme",
    year: "2018",
    quote: "Surprised Pikachu face.",
    phrases: ["surprised pikachu", "shocked pikachu", "pikachu face"],
    explanation: "A reaction image for acting shocked by an outcome that was completely predictable.",
    wikiQuery: "Surprised Pikachu meme",
    clipUrl: "https://knowyourmeme.com/memes/surprised-pikachu",
    clipLabel: "Open meme origin",
  },
  {
    title: "Woman yelling at a cat",
    source: "Real Housewives + Smudge the cat",
    medium: "Internet meme",
    year: "2019",
    quote: "Woman yelling at a cat.",
    phrases: ["woman yelling at a cat", "lady yelling at cat", "smudge the cat"],
    explanation: "Two unrelated images were combined into a reaction meme about an angry accusation meeting blank confusion.",
    wikiQuery: "Woman Yelling at a Cat meme",
    clipUrl: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
    clipLabel: "Open meme origin",
  },
  {
    title: "Spider-Man pointing",
    source: "1967 Spider-Man cartoon",
    medium: "Internet meme",
    year: "2011",
    quote: "Spider-Man pointing at Spider-Man.",
    phrases: ["spiderman pointing", "spider man pointing", "two spidermen pointing", "spidermen pointing at each other"],
    explanation: "Two identical Spider-Men accuse each other, used when people or situations are comically alike.",
    wikiQuery: "Spider-Man pointing meme",
    clipUrl: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man",
    clipLabel: "Open meme origin",
  },
  {
    title: "Is this a pigeon?",
    source: "The Brave Fighter of Sun Fighbird",
    medium: "Anime meme",
    year: "2011",
    quote: "Is this a pigeon?",
    phrases: ["is this a pigeon", "is that a pigeon"],
    explanation: "An android mistakes a butterfly for a pigeon. The meme labels obvious misunderstandings or bad classifications.",
    wikiQuery: "Is This a Pigeon meme",
    clipUrl: "https://knowyourmeme.com/memes/is-this-a-pigeon",
    clipLabel: "Open meme origin",
  },
  {
    title: "Let him cook",
    source: "Internet reaction phrase",
    medium: "Internet meme",
    year: "2022",
    quote: "Let him cook.",
    phrases: ["let him cook", "let her cook", "who let him cook", "never let him cook again"],
    explanation: "A request to let someone continue an unusual idea because it might work, or an ironic warning when it clearly will not.",
    wikiQuery: "Let Him Cook meme",
  },
  {
    title: "Doge",
    source: "Kabosu Shiba Inu photo",
    medium: "Internet meme",
    year: "2013",
    quote: "Such wow. Much amaze.",
    phrases: ["such wow", "much wow", "very doge", "doge meme"],
    explanation: "Photos of Kabosu paired with intentionally broken inner-monologue captions like 'such wow' and 'much amaze.'",
    wikiQuery: "Doge meme Kabosu",
    clipUrl: "https://knowyourmeme.com/memes/doge",
    clipLabel: "Open meme origin",
  },
  {
    title: "Press F to pay respects",
    source: "Call of Duty: Advanced Warfare",
    medium: "Game meme",
    year: "2014",
    quote: "Press F to pay respects.",
    phrases: ["press f to pay respects", "press f", "f in the chat", "pay respects"],
    explanation: "An awkward funeral prompt from Call of Duty became the internet's shorthand for acknowledging a loss or failure.",
    wikiQuery: "Press F to pay respects meme",
    clipUrl: "https://knowyourmeme.com/memes/press-f-to-pay-respects",
    clipLabel: "Open original moment",
  },
  {
    title: "Ain't nobody got time for that",
    source: "Sweet Brown news interview",
    medium: "Viral video",
    year: "2012",
    quote: "Ain't nobody got time for that.",
    phrases: ["ain't nobody got time for that", "aint nobody got time for that", "nobody got time for that"],
    explanation: "Sweet Brown's vivid account of escaping an apartment fire became a reaction to anything tedious or unnecessary.",
    wikiQuery: "Ain't Nobody Got Time for That meme Sweet Brown",
    clipUrl: "https://knowyourmeme.com/memes/sweet-brown-aint-nobody-got-time-for-that",
    clipLabel: "Open original clip",
  },
  {
    title: "What are those?",
    source: "Brandon Moore viral video",
    medium: "Vine meme",
    year: "2015",
    quote: "What are those?",
    phrases: ["what are those", "what are thooooose"],
    explanation: "A Vine mocking a police officer's shoes became a universal callout for questionable footwear.",
    wikiQuery: "What Are Those meme",
    clipUrl: "https://knowyourmeme.com/memes/what-are-those",
    clipLabel: "Open original clip",
  },
  {
    title: "We got this before GTA 6",
    source: "Gaming meme",
    medium: "Internet meme",
    year: "2023",
    quote: "We got this before GTA 6.",
    phrases: ["before gta 6", "we got this before gta six", "got this before gta"],
    explanation: "A joke about the long wait for Grand Theft Auto VI, attached to any surprising event that happened first.",
    wikiQuery: "We got this before GTA 6 meme",
  },
  {
    title: "Skibidi Toilet",
    source: "DaFuq!?Boom! YouTube series",
    medium: "YouTube meme",
    year: "2023",
    quote: "Skibidi dop dop yes yes.",
    phrases: ["skibidi toilet", "skibidi dop dop", "skibidi"],
    explanation: "A surreal animated series about singing heads in toilets that became a defining piece of Gen Alpha internet culture.",
    wikiQuery: "Skibidi Toilet",
    clipUrl: "https://www.youtube.com/@DaFuqBoom",
    clipLabel: "Open original series",
    exact: false,
  },
  {
    title: "Capybara / Okay I pull up",
    source: "TikTok capybara edits",
    medium: "TikTok meme",
    year: "2022",
    quote: "Okay, I pull up.",
    phrases: ["okay i pull up", "capybara song", "capybara meme", "after party capybara"],
    explanation: "Capybara videos were paired with Don Toliver's 'After Party,' making the lyric inseparable from the animal edits.",
    wikiQuery: "Capybara Okay I Pull Up meme",
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
  supportNote: document.querySelector("#support-note"),
  toast: document.querySelector("#toast"),
  aboutButton: document.querySelector("#about-button"),
};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let committedTranscript = "";
let sampleIndex = 0;
let toastTimer = null;
let lastMatchedTitle = "";
let lastMatchedAt = 0;
let activeSearchController = null;
const SEARCH_API = location.hostname.endsWith("github.io")
  ? "https://refer-kabir.vercel.app/api/search"
  : "/api/search";

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\btick tock\b/g, "tiktok")
    .replace(/\bspider men\b/g, "spidermen")
    .replace(/\bgta six\b/g, "gta 6")
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

const catalogIndex = references.map((reference) => ({
  reference,
  phrases: [...reference.phrases, reference.title, reference.source]
    .map((phrase) => normalize(phrase))
    .filter(Boolean),
  fuzzyPhrases: reference.phrases
    .map((phrase) => normalize(phrase).split(" ").filter(Boolean))
    .filter((tokens) => tokens.length > 1),
}));

function findCatalogMatch(input) {
  const normalized = normalize(input);
  if (!normalized) return null;
  const inputTokens = normalized.split(" ").filter(Boolean);

  const directMatches = catalogIndex.flatMap(({ reference, phrases }) =>
    phrases.map((phrase) => ({
      reference,
      phrase,
    }))
  ).filter(({ phrase }) => {
    if (!phrase || !normalized.includes(phrase)) return false;
    const phraseWords = phrase.split(" ").length;
    return phraseWords > 1 || inputTokens.length <= 7;
  }).sort((a, b) => b.phrase.length - a.phrase.length);

  if (directMatches[0]) return { ...directMatches[0].reference, confidence: "Strong match" };

  let bestReference = null;
  let bestScore = 0;

  catalogIndex.forEach(({ reference, fuzzyPhrases }) => {
    fuzzyPhrases.forEach((phraseTokens) => {
      const windowSizes = [phraseTokens.length - 1, phraseTokens.length, phraseTokens.length + 1]
        .filter((size) => size > 0);

      windowSizes.forEach((size) => {
        for (let start = 0; start <= Math.max(0, inputTokens.length - size); start += 1) {
          const windowTokens = inputTokens.slice(start, start + size);
          const overlap = phraseTokens.filter((token) => windowTokens.includes(token)).length / phraseTokens.length;
          const phraseText = phraseTokens.join(" ");
          const windowText = windowTokens.join(" ");
          const lengthPenalty = Math.abs(phraseText.length - windowText.length) / Math.max(phraseText.length, windowText.length, 1);
          const score = overlap * 0.82 + (1 - lengthPenalty) * 0.18;
          if (score > bestScore) {
            bestReference = reference;
            bestScore = score;
          }
        }
      });
    });
  });

  return bestScore >= 0.72 ? { ...bestReference, confidence: "Likely match" } : null;
}

function extractReferenceCue(input) {
  const cues = [
    /(?:it'?s|that'?s) (?:giving|so) (.+)$/i,
    /(?:just )?like (?:in |from )?(.+)$/i,
    /reminds? me of (.+)$/i,
    /reference to (.+)$/i,
    /(?:that|this) (?:meme|tiktok|sound|trend) (?:where|with|about) (.+)$/i,
    /you know (?:that|the) (?:meme|tiktok|sound) (.+)$/i,
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
  if (/tiktok|meme|viral|vine|youtube/i.test(reference.medium) && !reference.thumbnail) {
    return reference;
  }

  try {
    const pages = await searchWikipedia(reference.wikiQuery || `${reference.title} ${reference.source}`);
    const page = pages[0];
    if (!page) return reference;
    return {
      ...reference,
      thumbnail: page.thumbnail?.source || page.original?.source || reference.thumbnail || "",
      sourceUrl: reference.sourceUrl || page.fullurl || "",
    };
  } catch (error) {
    return reference;
  }
}

function setLoading() {
  ui.emptyState.hidden = true;
  ui.resultContent.hidden = false;
  ui.resultContent.innerHTML = `
    <div class="loading-state">
      <div><i data-lucide="loader-circle"></i><p>Searching the web...</p></div>
    </div>
  `;
  refreshIcons();
}

async function searchWeb(query, signal) {
  const response = await fetch(`${SEARCH_API}?q=${encodeURIComponent(query)}`, { cache: "no-store", signal });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.results?.length) throw new Error(data.error || "Web search failed");
  return data;
}

function buildSearchLinks(query) {
  const displayQuery = query.replace(/^[\s"'“”‘’]+|[\s"'“”‘’]+$/g, "").trim();
  const encoded = encodeURIComponent(displayQuery);
  return {
    memes: `https://www.google.com/search?q=${encodeURIComponent(`${displayQuery} meme`)}`,
    tiktok: `https://www.tiktok.com/search?q=${encoded}`,
    x: `https://x.com/search?q=${encoded}&src=typed_query`,
  };
}

async function resolveReference(input, options = {}) {
  const query = input.trim();
  if (!query) {
    showToast("Say or type a reference first.");
    ui.searchInput.focus();
    return;
  }

  let match = findCatalogMatch(query);
  const soundsLikeSocialReference = /\b(meme|tiktok|tick tock|trend|sound|audio|viral|giving|reminds? me|you know that)\b/i.test(query);
  const cue = options.fromSpeech
    ? match?.title || extractReferenceCue(query) || (soundsLikeSocialReference ? query : "")
    : query;

  if (!cue) {
    if (!options.silentMiss) {
      showEmptyMessage("No clear search phrase yet. Try a longer part of the reference.");
    }
    return;
  }

  const duplicateKey = match?.title || cue;
  if (options.fromSpeech && duplicateKey === lastMatchedTitle && Date.now() - lastMatchedAt < 8000) return;

  activeSearchController?.abort();
  const searchController = new AbortController();
  activeSearchController = searchController;
  setLoading();
  try {
    const web = await searchWeb(cue, searchController.signal);
    const hasVerifiedSource = Boolean(match?.embedId || match?.clipUrl);

    if (hasVerifiedSource) {
      match = await enrichReference(match);
      renderResult(match, web.results, web.searches);
    } else {
      renderWebResult(web, match);
    }

    lastMatchedTitle = duplicateKey;
    lastMatchedAt = Date.now();
  } catch (error) {
    if (error.name === "AbortError") return;
    const searches = buildSearchLinks(cue);
    if (match) {
      match = await enrichReference(match);
      renderResult(match, [], searches);
    } else {
      renderSearchFallback(cue, searches);
    }
  } finally {
    if (activeSearchController === searchController) activeSearchController = null;
  }
}

function getDiscoveryUrl(reference) {
  const query = encodeURIComponent(`${reference.quote || reference.title} ${reference.source}`);
  if (reference.medium.toLowerCase().includes("tiktok")) {
    return `https://www.tiktok.com/search?q=${query}`;
  }
  return `https://www.youtube.com/results?search_query=${query}`;
}

function getClipLabel(reference) {
  if (reference.clipLabel) return reference.clipLabel;
  if (reference.embedId || reference.clipUrl) return "Play exact clip";
  if (/tiktok|meme|viral|vine/i.test(reference.medium)) return "Find original";
  return "Search clips";
}

function renderWebResult(web, catalogMatch) {
  const [top, ...related] = web.results;
  const reference = {
    title: catalogMatch?.title || top.title,
    source: catalogMatch?.source || top.domain,
    medium: catalogMatch?.medium || top.domain,
    year: catalogMatch?.year || "Web match",
    quote: catalogMatch?.quote || `“${web.query}”`,
    explanation: catalogMatch?.explanation || top.snippet,
    thumbnail: top.image || catalogMatch?.thumbnail || "",
    sourceUrl: top.url,
    clipUrl: top.url,
    clipLabel: top.videoId ? "Play video" : "Open source",
    embedId: top.videoId || "",
    exact: false,
  };

  renderResult(reference, related, web.searches);
}

function renderSearchFallback(query, searches) {
  renderResult({
    title: `Search for “${query}”`,
    source: "TikTok, X, and meme sources",
    medium: "Social search",
    year: "",
    quote: `“${query}”`,
    explanation: "Open one of the focused searches below to find the original post, trend, or meme.",
    sourceUrl: searches.memes,
    clipUrl: searches.memes,
    clipLabel: "Search memes",
    exact: false,
  }, [], searches);
}

function renderWebExtras(results = [], searches = {}) {
  const resultCards = results.slice(0, 4).map((result) => `
    <a class="web-result" href="${escapeHtml(result.url)}" target="_blank" rel="noopener noreferrer">
      <span class="web-result-domain">${escapeHtml(result.domain || result.group || "Web")}</span>
      <strong>${escapeHtml(result.title)}</strong>
      <span>${escapeHtml(result.snippet || "Open result")}</span>
      <i data-lucide="arrow-up-right"></i>
    </a>
  `).join("");

  const labels = {
    memes: "Memes",
    tiktok: "TikTok",
    x: "X",
  };
  const searchLinks = Object.entries(searches).filter(([key, value]) => labels[key] && value).map(([key, value]) => `
    <a href="${escapeHtml(value)}" target="_blank" rel="noopener noreferrer">${labels[key]}</a>
  `).join("");

  if (!resultCards && !searchLinks) return "";

  return `
    <section class="web-results" aria-label="More web results">
      ${resultCards ? `<h3>More from the web</h3><div class="web-results-grid">${resultCards}</div>` : ""}
      ${searchLinks ? `<div class="source-searches"><span>Search on</span>${searchLinks}</div>` : ""}
    </section>
  `;
}

function renderResult(reference, relatedResults = [], searches = {}) {
  ui.emptyState.hidden = true;
  ui.resultContent.hidden = false;
  const sourceLink = reference.sourceUrl || `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(reference.wikiQuery || reference.title)}`;
  const clipLink = reference.clipUrl || getDiscoveryUrl(reference);
  const hasExactMoment = Boolean(reference.embedId || reference.clipUrl) && reference.exact !== false;

  let media;
  if (reference.embedId) {
    media = `
      <iframe
        class="clip-frame"
        src="https://www.youtube-nocookie.com/embed/${escapeHtml(reference.embedId)}?rel=0"
        title="${escapeHtml(reference.title)} clip"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  } else if (reference.thumbnail) {
    media = `<img class="result-image" src="${escapeHtml(reference.thumbnail)}" alt="${escapeHtml(reference.source)}" />`;
  } else {
    media = `<div class="result-image-fallback"><i data-lucide="play-square"></i></div>`;
  }

  const mediaAction = reference.embedId ? "" : `
    <a class="media-action" href="${escapeHtml(clipLink)}" target="_blank" rel="noopener noreferrer">
      <i data-lucide="play"></i><span>${escapeHtml(getClipLabel(reference))}</span>
    </a>
  `;

  ui.resultContent.innerHTML = `
    <div class="result-media">
      ${media}
      ${mediaAction}
    </div>
    <div class="result-copy">
      <div class="result-meta">
        <span class="medium-tag">${escapeHtml(reference.medium)}</span>
        <span>${escapeHtml(reference.year || "Source found")}</span>
        ${hasExactMoment ? `<span class="exact-tag">Exact source</span>` : ""}
      </div>
      <h2>${escapeHtml(reference.title)}</h2>
      <p class="result-source">From ${escapeHtml(reference.source)}</p>
      <blockquote class="result-quote">${escapeHtml(reference.quote)}</blockquote>
      <p class="result-explanation">${escapeHtml(reference.explanation)}</p>
      <div class="result-actions">
        ${reference.embedId ? `
          <a class="action-link primary" href="https://www.youtube.com/watch?v=${escapeHtml(reference.embedId)}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="play"></i><span>Open clip</span>
          </a>
        ` : ""}
        <a class="action-link" href="${escapeHtml(sourceLink)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="book-open"></i><span>Context</span>
        </a>
      </div>
    </div>
    ${renderWebExtras(relatedResults, searches)}
  `;
  refreshIcons();
}

function showEmptyMessage(message) {
  ui.resultContent.hidden = true;
  ui.emptyState.hidden = false;
  ui.emptyState.querySelector("p").textContent = message;
}

function setListening(nextState) {
  isListening = nextState;
  document.body.classList.toggle("is-listening", nextState);
  ui.listenButton.classList.toggle("listening", nextState);
  ui.waveform.classList.toggle("active", nextState);
  ui.liveBadge.classList.toggle("listening", nextState);
  const listenLabel = ui.listenButton.querySelector("strong");
  const listenHint = ui.listenButton.querySelector("small");
  if (listenLabel) listenLabel.textContent = nextState ? "HEARING" : "LISTEN";
  if (listenHint) listenHint.textContent = nextState ? "TAP TO STOP" : "TAP TO START";
  ui.liveLabel.textContent = nextState ? "Live" : "Ready";
  ui.listenButton.title = nextState ? "Stop listening" : "Start listening";
  ui.listenButton.querySelector("svg")?.remove();
  const icon = document.createElement("i");
  icon.dataset.lucide = nextState ? "audio-waveform" : "ear";
  const coreGlow = ui.listenButton.querySelector(".core-glow");
  coreGlow?.insertAdjacentElement("afterend", icon);
  refreshIcons();
}

function setupRecognition() {
  if (!SpeechRecognition) {
    ui.supportNote.textContent = "Live listening is not supported here. Type the reference above instead.";
    ui.supportNote.hidden = false;
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
      const recentTranscript = committedTranscript.split(/\s+/).slice(-32).join(" ");
      resolveReference(recentTranscript, { fromSpeech: true, silentMiss: true });
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
    "This meeting is very demure and very mindful.",
    "Oh no, our table, it's broken.",
    "Okay I pull up, capybara.",
    "That was a bombastic side eye.",
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
  ui.transcript.textContent = "Listening is off. Type above or turn it on.";
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
ui.aboutButton?.addEventListener("click", () => {
  showToast("Tap LISTEN or type the line. Refer matches it to the source and explains the context.");
});

setupRecognition();
refreshIcons();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
}

# CatchThat

CatchThat is a voice-first reference finder for the moment someone quotes a movie, TV show, book, meme, game, or TikTok and you do not know what they mean.

## Demo

Open the live app: **https://kabirkoratkar.github.io/catch-that-reference/**

## What it does

- Listens to a conversation through the browser's built-in speech recognition
- Detects well-known quotes, catchphrases, memes, and social trends
- Shows the source, meaning, date, artwork, and links to learn more
- Supports typed searches for quieter rooms and unsupported browsers
- Saves recent references locally for quick recall
- Installs as a lightweight PWA and keeps audio on the user's device

## Run locally

No build step or API key is required.

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173 in Chrome, Edge, or Safari.

## How it works

The MVP combines a curated pop-culture phrase catalog with browser speech recognition. A Wikipedia lookup enriches matches with source artwork and links. Unknown typed references fall back to a broader source search.

## Hackathon roadmap

- Add an LLM-backed classifier for indirect and multilingual references
- Add opt-in integrations for meetings, calls, and captions
- Add community submissions and reference packs
- Add confidence controls and duplicate suppression for noisy rooms
- Package as a browser extension and mobile companion

## Contributing

Issues and pull requests are welcome. Keep new detection phrases in the `references` catalog in `app.js`, include a plain-language explanation, and verify the source query.

## License

MIT

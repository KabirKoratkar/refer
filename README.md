# Refer

Refer is a voice-first reference finder for the moment someone quotes a movie, TV show, book, meme, game, or TikTok and you do not know what they mean.

## Demo

Open the live app: **https://kabirkoratkar.github.io/refer/**

## What it does

- Listens to a conversation through the browser's built-in speech recognition
- Detects well-known quotes, catchphrases, memes, and social trends
- Pulls up an exact clip or original post when one is known
- Shows the source, meaning, date, artwork, and context
- Supports typed searches for quieter rooms and unsupported browsers
- Installs as a lightweight PWA and only starts the microphone when the user turns listening on
- Recognizes a curated set of movie quotes, TV catchphrases, memes, TikTok sounds, viral videos, and internet slang

## Run locally

No build step or API key is required.

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173 in Chrome, Edge, or Safari.

## How it works

The MVP combines a curated pop-culture phrase catalog with browser speech recognition. Rolling transcript matching catches phrases split across speech chunks, while a source lookup enriches matches with artwork and context. Known references point to exact clips or original posts; unknown typed references fall back to a broader source search.

## Hackathon roadmap

- Add an LLM-backed classifier for indirect and multilingual references
- Add opt-in integrations for meetings, calls, and captions
- Add community submissions and reference packs
- Add confidence controls for noisy rooms
- Package as a browser extension and mobile companion

## Contributing

Issues and pull requests are welcome. Keep new detection phrases in the `references` catalog in `app.js`, include a plain-language explanation, and verify any clip or source URL.

## License

MIT

# Refer

Refer is a voice-first reference finder for the moment someone quotes a movie, TV show, book, meme, game, or TikTok and you do not know what they mean.

## Demo

Open the live app: **https://refer-kabir.vercel.app/**

GitHub Pages mirror: **https://kabirkoratkar.github.io/refer/**

## What it does

- Listens to a conversation through the browser's built-in speech recognition
- Detects well-known quotes, catchphrases, memes, and social trends
- Pulls up an exact clip or original post when one is known
- Searches TikTok, X, meme sites, and video sources for unknown references
- Uses Claude web search to rank the likely original post or exact clip first
- Provides focused follow-up searches for memes, TikTok, and X
- Shows the source, meaning, date, artwork, and context
- Supports typed searches for quieter rooms and unsupported browsers
- Installs as a lightweight PWA and only starts the microphone when the user turns listening on
- Recognizes a curated set of movie quotes, TV catchphrases, memes, TikTok sounds, viral videos, and internet slang

## Run locally

Set `ANTHROPIC_API_KEY` in your local environment, then run the app and its serverless search route together with the Vercel CLI:

```bash
vercel dev --listen 4173
```

Then open http://localhost:4173 in Chrome, Edge, or Safari.

## How it works

The MVP combines browser speech recognition with the serverless route in `api/search.js`. Rolling transcript matching catches phrases split across speech chunks. Claude searches social sources and returns cited URLs, with a lightweight public search fallback when the API key is unavailable. The curated catalog remains only as a fast path for verified exact clips.

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

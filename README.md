# HeyNodryx Web

Landing page & documentation website for **HeyNodryx** — a Python voice assistant built with Whisper, Edge TTS, and LLM fallback.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 |
| Build | Vite 6 |
| Icons | Emoji native |

## Project Structure

```
src/
├── main.jsx                    # Entry point — BrowserRouter + App
├── App.jsx                     # Routes: "/" → Landing, "/docs" → Docs
├── css/
│   └── main.css                # Tailwind directives + custom components
├── components/
│   ├── Navbar.jsx              # Sticky navbar, auto-highlight active route
│   ├── Footer.jsx              # Reusable footer
│   ├── CodeBlock.jsx           # Code block with copy-to-clipboard
│   └── ScrollReveal.jsx        # IntersectionObserver fade-in wrapper
├── hooks/
│   └── useScrollSpy.js         # Track visible heading for docs sidebar
└── pages/
    ├── Landing.jsx             # Hero, About, Features, Flow, Skills, etc.
    └── Docs.jsx                # Full documentation with sidebar
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Landing page — hero, features, skills, quickstart, roadmap |
| `/docs` | Documentation — installation, commands, STT, TTS, LLM, skills, memory, GUI, FastAPI |

## Design

- **Theme:** Dark, terminal-inspired (`#0A0A0A` background)
- **Accent:** Soft blue (`#60A5FA`)
- **Typography:** JetBrains Mono (headings) + Inter (body)
- **Style:** Minimalis, `//` prefixed section headings ala code comments

## License

MIT

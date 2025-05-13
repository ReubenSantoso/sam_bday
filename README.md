# 🎉 Prompt-Engineering Birthday Surprise
#### Final Product: https://sam-bday-chi.vercel.app/

A **5-hour sprint** that turned a last-minute idea into a full-stack, AI-powered puzzle.  
Chat with the bot, coax out metaphorical hints, and uncover a hidden birthday password using nothing but clever prompts.

[![Live Demo](https://img.shields.io/badge/Live-Site-Vercel-black?logo=vercel)](https://sam-bday-chi.vercel.app/)

---

## 🛠 Tech Stack

| Layer | Tooling | Why it’s here |
|-------|---------|---------------|
| **Frontend** | **React 18 + Next 14** | File-system routing, fast refresh, zero-config deploys |
| UI & Chat | **[assistance-ui](https://www.assistant-ui.com/)** + **Tailwind CSS** | Drop-in chat pane, utility classes for rapid theming |
| **Backend** | Next.js **Route Handlers** | Lightweight edge APIs that proxy GPT-4o |
| LLM | **OpenAI GPT-4o** | Generates riddles while guarding the secret |
| Deployment | **Vercel** | Git push → preview URL → production |

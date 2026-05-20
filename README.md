# MiCasa Ostuni — Guest Guide

A premium, multilingual digital guest guide for **MiCasa Ostuni**, our apartment
in Ostuni (Puglia). It gives guests everything they need — check-in, WiFi, house
info, beaches, places to eat, FAQ — plus an **AI concierge** that answers
questions about the apartment, Ostuni and Puglia.

- **Languages:** Italian, English, French, German (`it`, `en`, `fr`, `de`)
- **Stack:** Vite + React 19 + TypeScript, Tailwind CSS v4, i18next
- **AI:** OpenAI GPT-4.1 with web search, called from a serverless function (`/api/chat`)
- **Hosting:** Vercel — live at **https://guida.micasaostuni.com**

---

## Prerequisites

- **Node.js 20+** and npm
- An **OpenAI API key** — get one at https://platform.openai.com
- The **Vercel CLI** for local development of the AI function:
  ```bash
  npm i -g vercel
  ```

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file and add your key
cp .env.example .env
#    then open .env and set OPENAI_API_KEY=sk-...

# 3. Run the app WITH the AI function
vercel dev
```

> **Use `vercel dev`, not `vite`.** Plain `vite` serves the UI but **not** the
> `/api/chat` serverless function, so the AI assistant won't work. `vercel dev`
> runs both together.
>
> **On a machine with TLS interception (antivirus/proxy):** local OpenAI calls may
> fail with a connection/certificate error. Start with TLS verification disabled
> **for local dev only**: `NODE_TLS_REJECT_UNAUTHORIZED=0 vercel dev`. Production on
> Vercel is unaffected.

### Production build (static output)

```bash
npm run build
```

---

## How to edit content

Most edits are simple text changes — no React knowledge required.

| What you want to change | Where to edit |
| --- | --- |
| WiFi, check-in/out, house info, places, FAQ, etc. | `src/content/{it,en,fr,de}.ts` |
| Shared URLs & contacts (map links, phone, email) | `src/content/shared.ts` |
| Extra Ostuni / Puglia knowledge **for the AI only** | `api/_lib/kb/ostuniPuglia.ts` |
| UI labels (buttons, nav, chat strings) | `src/i18n/locales/*/common.json` |

**Keep all 4 languages in sync.** When you add or change an entry in
`src/content/en.ts`, make the matching edit in `it.ts`, `fr.ts` and `de.ts` so
guests see the same information in every language.

The extra AI knowledge base (`api/_lib/kb/ostuniPuglia.ts`) is **not shown to
guests directly** — it's background context the AI uses to answer free-form
questions about the area.

---

## Security

- `OPENAI_API_KEY` is **server-side only**. It's read by the `/api/chat`
  serverless function and never sent to the browser.
- **Never** prefix it (or any secret) with `VITE_`. Vite bundles every `VITE_*`
  variable into the public client code, which would leak the key.
- The guest question limit is a client-side UX guard — the real safeguard for
  cost/abuse is your OpenAI account settings (usage limits) and Vercel function logs.

---

## Deploy to Vercel

1. **Connect the repo** to a Vercel project (or run `vercel` from the project
   root to link it).
2. **Set environment variables** in Vercel → *Settings → Environment Variables*
   (for Production and Preview):
   - `OPENAI_API_KEY` — your OpenAI key
   - `OPENAI_MODEL` — e.g. `gpt-4.1` (see `.env.example`)
3. **Deploy:**
   ```bash
   vercel --prod
   ```
4. **Add the custom domain** in Vercel → *Settings → Domains*:
   - Add `guida.micasaostuni.com`
   - At your DNS provider, create a **CNAME** record pointing
     `guida` → `cname.vercel-dns.com` (Vercel shows the exact target to use)
   - Wait for DNS to propagate; Vercel issues the SSL certificate automatically.

---

Made with care by Michele & Ilaria.

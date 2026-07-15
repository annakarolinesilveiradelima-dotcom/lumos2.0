# Lumos — Harry Potter Entertainment Intelligence

Plataforma SaaS premium em Next.js, React, TypeScript, Tailwind, Framer Motion, Recharts e Supabase opcional.

## Rodar local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse `http://localhost:3000`.

## Update Intelligence

O botão `⚡ Update Intelligence` chama `/api/intelligence/update`.
Na primeira execução usa `2026-03-24`. Nas próximas usa a data salva no navegador como `lumos.lastRun`.

## Variáveis recomendadas

- `YOUTUBE_API_KEY` ativa YouTube Brasil.
- Supabase é opcional para evolução com persistência.
- Sem variáveis, a plataforma funciona com seeds e Google News RSS quando disponível.

## Deploy

Use Vercel para suporte completo a rotas API. GitHub Pages não executa rotas Next server-side.

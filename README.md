# CashFlowAPV

Data Explorer App — v0 UI scaffold. See `~/Desktop/agents/notes/efforts/Data Explorer App.md` for the full spec.

## Setup

```bash
pnpm install
cp .env.example .env.local      # fill in values, see below
pnpm dev
```

## Credentials

All client-side env vars live in `.env.local` (gitignored). Required:

| Var | Where to find it |
|---|---|
| `VITE_SUPABASE_URL` | Supabase dashboard → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase dashboard → Project Settings → API → `anon` `public` key |

## Supabase auth setup (one-time)

In the Supabase dashboard:

1. **Authentication → URL Configuration** — add `http://localhost:5173` to Site URL and Redirect URLs.
2. **Authentication → Providers**:
   - **GitHub** — enable, paste GitHub OAuth app's client ID + secret. Callback URL Supabase shows you → register that with GitHub.
   - **Google** — enable, paste Google Cloud OAuth client ID + secret. Same callback-URL flow.
   - **Email** — already on by default; magic link works out of the box.

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Vite dev server |
| `pnpm build` | TS check + Vite production build |
| `pnpm typecheck` | TS check only |
| `pnpm lint` | ESLint flat config |
| `pnpm format` | Prettier write |
| `pnpm test` | Vitest |

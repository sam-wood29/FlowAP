# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## General Instructions
Do no make assumptions about design.
speak concisely. 
offer explanations intuitively.

## What this is

Vite + React 18 + TypeScript SPA scaffolded as the "Data Explorer App" v0 UI. Full product spec lives outside the repo at `~/Desktop/agents/notes/efforts/Data Explorer App.md` — read it before doing any non-trivial feature work, since the current code is only a navigation/auth shell.

Package manager is **pnpm** (lockfile is `pnpm-lock.yaml`). Do not introduce npm/yarn.

## Commands

```bash
pnpm install
pnpm dev          # Vite dev server (http://localhost:5173)
pnpm build        # tsc -b && vite build  (typecheck happens here)
pnpm typecheck    # tsc -b --noEmit
pnpm lint         # ESLint flat config (eslint.config.js)
pnpm format       # Prettier write
pnpm test         # Vitest (no tests yet — `vitest run` exits 0)
pnpm test -- path/to/file.test.ts   # single file
pnpm test -- -t "name"               # single test by name
```

`tsc -b` is part of `build`; a typecheck failure breaks the build. The standalone `pnpm typecheck` is faster for iteration.

## Env / secrets

Client env vars are read by `src/lib/supabase.ts` via `import.meta.env` and **must** be `VITE_`-prefixed to reach the browser bundle. Put them in `.env.local` (gitignored — `.gitignore` excludes `.env*` except `.env.example`):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

`supabase.ts` throws at module load if either is missing, so the app won't render without them. See `README.md` for the one-time Supabase dashboard config (OAuth providers, redirect URLs).

`.mcp.json` registers a **read-only** Supabase MCP server. It reads `SUPABASE_ACCESS_TOKEN` from the shell env — that token is separate from the client anon key.

## Architecture

### Routing is state, not URL

There is no router. Two Zustand stores drive everything:

- `src/store/auth.ts` — subscribes to `supabase.auth.onAuthStateChange` on module load and exposes `status: 'loading' | 'authed' | 'anon'`. `src/App.tsx` switches between `<Splash />`, `<Login />`, and `<Main />` based on it.
- `src/store/nav.ts` — `screen` (`'home' | 'data' | 'graph' | 'table'`), `tab` (`'build' | 'view'`), and `drawerOpen`. `src/screens/Main.tsx` is the in-app shell; it renders the active screen via a switch on `nav.screen`.

When adding navigation, extend the `Screen` union in `store/nav.ts` and the switch in `Main.tsx` — don't add `react-router`.

### Auth flow

`Login.tsx` calls `supabase.auth.signInWithOAuth` (GitHub/Google) or `signInWithOtp` (magic link). Redirect target is `window.location.origin`. The session is then picked up by the `onAuthStateChange` subscriber in `auth.ts`, which flips `status` to `'authed'` and re-renders `App`.

### Styling

Tailwind 3 with a black/hairline palette. Colors are defined **twice**: as CSS variables in `src/index.css` (`--color-bg`, `--color-data`, etc.) and as Tailwind theme tokens in `tailwind.config.ts`. Components mostly reference the CSS vars directly via `bg-[var(--color-bg)]` arbitrary values rather than the Tailwind tokens — match that style when editing. If you add a color, add it to both places.

Fonts: Geist / Geist Mono loaded from Google Fonts in `index.css`.

### Planned deps not yet wired up

`package.json` includes `@duckdb/duckdb-wasm`, `apache-arrow`, `@observablehq/plot`, `@tanstack/react-table`, and `vaul`. None are imported yet — they're staged for the Data Explorer features described in the spec. Don't remove them as "unused"; check the spec first.

## Inherited project rules

This repo lives under `~/Desktop/agents/`, so the parent `agents/CLAUDE.md` and `.claude/rules/*.md` apply (conventional commits, immutability, security checklist). Notable overrides for this project specifically:

- Shell is bash, but **this project is JS/TS** — use `pnpm`, not `uv`.
- "Make a note" still routes to `~/Desktop/agents/notes/`, not into this repo.



# Project Instructions

## Project Overview
This is an Astro site deployed to GitHub Pages. Jekyll is NOT used.

## Build & Deploy
- Build command: `npm run build` (outputs to `dist/`)
- Deploy from `dist/` — never from the repo root or `src/`
- GitHub Pages workflow must point `INPUT_SOURCE` to `dist/`

## Architecture
- `src/` — Astro source files (.astro, .ts, .tsx)
- `dist/` — Build output (auto-generated, do not edit)
- `public/` — Static assets

## Critical Rules
- NEVER let Jekyll process `src/` — add `_config.yml` exclusions if needed
- Do NOT add `.md` front matter (`---`) handling for `.astro` files
- Always build Astro before any deployment step

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview built output

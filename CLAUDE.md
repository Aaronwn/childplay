# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A replica of ChildPlay.app — a free library of zero-prep activity ideas for kids ages 1-6. Built with React + TypeScript + Vite, originally created via Google AI Studio.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build
- `npm run lint` — Type-check via `tsc --noEmit`
- `npm run preview` — Preview production build

## Architecture

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), react-router-dom v7, Framer Motion (`motion`), lucide-react icons.

**Path alias:** `@/*` maps to the project root (not `src/`).

**Styling:** Tailwind v4 with `@theme` directive in `src/index.css`. Font is Inter. No separate Tailwind config file — uses the Vite plugin directly.

**Routing:** All routes defined in `src/App.tsx` using `<BrowserRouter>`. Layout wraps all pages via `<Route path="/" element={<Layout />}>`. Category pages are a single reusable `CategoryPage` component receiving `FilterParams` as props — routes are SEO-friendly slugs like `/activities-for-2-year-olds`.

**Data layer:** All activity data lives in `src/data/activities.ts` as a static array. No backend/database. The `Activity` interface defines types: `ActivityType`, `EnergyLevel`, `SpaceRequirement`. Filtering logic is in `src/lib/filterActivities.ts`.

**Image generation:** Two paths for images:
1. Runtime: `src/lib/imageService.ts` uses Gemini API (`gemini-2.5-flash-image`) to generate images on-the-fly, cached in IndexedDB with a rate-limited queue (2s delay between requests).
2. Batch: `scripts/generate-images.ts` pre-generates images to `public/images/` using the same Gemini model. Run with `npx tsx scripts/generate-images.ts`.

**ActivityImage component** (`src/components/ActivityImage.tsx`) tries Gemini generation first, falls back to the Unsplash URL in `activity.image`.

**Environment:** Requires `GEMINI_API_KEY` in `.env.local`. Vite injects it as `process.env.GEMINI_API_KEY` via `define` in `vite.config.ts`.

**Utility:** `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

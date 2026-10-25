# Project Context & Coding Rules: Business Coaching Website

## 1. Tech Stack & Strict Rules
- **Framework:** Astro (Static Site Generation, hosted on GitHub Pages)
- **Node.js:** v24 (configured in `.github/workflows/deploy.yml`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` in `astro.config.mjs`.
  - **CRITICAL:** Do NOT install `@astrojs/tailwind` and do NOT create a `tailwind.config.mjs` or `tailwind.config.js` file.
  - Configure all custom fonts, colors, and design tokens exclusively inside `src/styles/global.css` using the Tailwind v4 `@theme` directive.
- **Fonts:** Self-hosted via `@fontsource/lora` (headings, serif) and `@fontsource-variable/inter` (body, sans-serif) for 100% Swiss DSG / EU GDPR compliance (no external Google Fonts requests).

## 2. Positioning & Brand Identity
- **Role:** Professional Business Coach, Sparring Partner & Operational Mentor (Switzerland / DACH market).
- **Target Audience:** Leaders, New Managers, Tech/Project Leads, Scrum Masters, Agile Coaches and Organizations in transformation.
- **Approach:** Systemic, solution-focused, reflective inquiry, grounded in real-world corporate/IT leadership experience and certified operational mentoring.
- **Language:** German (Swiss German standard orthography: always use `ss` instead of `ß`, e.g., `gross`, `heissen`, `Fluss`).

## 3. Visual Design System
- **Backgrounds:** Warm stone/off-white (`bg-stone-50`) alternating with clean white (`bg-white`) and deep slate/emerald sections for contrast.
- **Primary Text:** Deep slate (`text-slate-900`) and muted body copy (`text-slate-600`).
- **Accent Color:** Deep Emerald / Forest Green (`emerald-800` / `emerald-900`) to convey calm competence, trust, and clarity.
- **Typography:** Editorial serif headings (`font-serif` -> Lora) paired with clean sans-serif body text (`font-sans` -> Inter).
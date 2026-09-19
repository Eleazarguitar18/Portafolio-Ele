# Agent Guidelines: Portafolio-Ele

## Overview & Architecture
- **Framework**: React 19 + TypeScript 5.7 SPA bundled with Vite 6.
- **Styling & Motion**: `@emotion/styled` with dynamic theming (`ThemeContext.tsx` / `src/styles/theme.ts`) and Framer Motion for animations.
- **Data & Component Layer**: Portfolio section data is localized in `src/data/` (`projects.ts`, `about.ts`, `skills.tsx`, `contact.ts`). `Hero` section is eager-loaded in `src/App.tsx` for performance, while `Projects`, `Skills`, and `Contact` are lazy-loaded within `Suspense` boundaries.

## Developer Commands & Verification
- **Development**: `npm run dev`
- **Linting**: `npm run lint` (`eslint .`)
- **Build & Typecheck**: `npm run build` (`tsc -b && vite build`)
- **Preview**: `npm run preview`
- **Verification Workflow**: Run `npm run lint` and `npm run build`. *(Note: No unit test runner is configured. `eslint` flags explicit `any` types used in Emotion styled-components theme function parameters).*

## Toolchain & Build Quirks
- **Vite Config**: Executable base path is set to `/` in `vite.config.ts`.
- **Optimization Plugins**:
  - `@emotion/babel-plugin` is integrated into `@vitejs/plugin-react`.
  - Production builds generate Brotli (`.br`) and Gzip (`.gz`) compressed files.
  - Terser minification drops `console.log` and `debugger` statements.
  - Bundle size visualizer output is written to `dist/stats.html` upon build.
  - No formatting tool (like Prettier) is explicitly configured; format alongside `eslint`.
  - Fix explicit `any` errors in Emotion styled-components by importing `Theme` from `src/styles/theme.ts` (e.g. `({ theme }: { theme: Theme }) => ...`).

## Deployment
- **GitHub Pages**: Automated CI deployment occurs on push to `main` branch via `.github/workflows/main.yml`, building and deploying the `dist/` directory.

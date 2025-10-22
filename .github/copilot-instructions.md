# Copilot Instructions for AI Agents

## Project Overview
- This is a React single-page application bootstrapped with Vite.
- Main entry: `src/main.jsx` renders `App` from `src/App.jsx`.
- Styling uses Tailwind CSS (`tailwind.config.js`, `postcss.config.js`, `src/index.css`).
- Static assets are in `public/` and `src/assets/`.

## Architecture & Patterns
- All UI logic is in `src/`.
- `App.jsx` is the root component; add new features as components in `src/` and import into `App.jsx`.
- Use functional React components and hooks (no class components).
- Prefer colocating styles with components using CSS modules or Tailwind utility classes.
- Asset imports (images, etc.) should use relative paths from `src/assets/`.

## Developer Workflows
- **Start dev server:** `npm run dev` (uses Vite, supports HMR)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint config in `eslint.config.js`)
- No test setup is present by default; add tests in `src/` if needed.

## Conventions & Integration
- Use only official Vite and React plugins (see README for details).
- No TypeScript or type-aware linting unless explicitly added.
- No custom routing, state management, or API integration by default—add these in `src/` as needed.
- Avoid global styles outside `src/index.css`.
- Do not modify files in `public/` except for static assets.

## Examples
- To add a new page/component: create `src/MyComponent.jsx`, import and use in `App.jsx`.
- To add a new style: use Tailwind classes in JSX or add to `src/index.css`.
- To add an image: place in `src/assets/`, import in your component.

## Key Files
- `src/App.jsx`: Root component, main UI logic.
- `src/main.jsx`: App entry point.
- `src/index.css`: Global styles, Tailwind imports.
- `vite.config.js`: Vite configuration.
- `eslint.config.js`: ESLint rules.
- `tailwind.config.js`, `postcss.config.js`: Tailwind setup.

---
If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
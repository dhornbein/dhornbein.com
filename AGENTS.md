
# Drew Hornbein's Personal Website

This repository hosts the source for dhornbein.com. The site is a small, opinionated Nuxt 4 project used to present Drew's resume, portfolio, and contact information.

This file is intentionally minimal. It records the project's strict conventions and a short, practical set of instructions for automated agents. Keep edits small, scoped, and reversible.

## Key conventions (must follow)

- Use Composition API with `<script setup>` only (no Options API).
- Use Tailwind utility classes for styles; small SCSS files and `@apply` are acceptable for reuse.
- Never hard-code colors; use Tailwind's tokens.
- Add only meaningful comments that explain why something is done (not what it does).
- Use named functions for methods; arrow functions only for callbacks.
- Prefer named exports to default exports.
- Nuxt auto-imports components, composables, utilities, and Vue/Nuxt APIs — do not manually import them.
- Use NuxtLink for internal links.
- Use Yarn package manager.

If a proposed change would violate any of these, refuse and offer a compliant alternative.

## Working with the repo (for LLM agents)

- Keep changes tiny and well-scoped (single page or single component where possible).
- Before editing: state a 1–3 line contract describing the inputs, files to change, and expected output.
- Apply changes as a minimal apply_patch diff and include a one-line test/verification note.
- If unclear, ask one concise clarifying question rather than guessing.

---

Keep this file up-to-date when conventions change.

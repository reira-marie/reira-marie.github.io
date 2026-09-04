# Portfolio — React Version

Same design and content as the plain-HTML version, rebuilt in **React + Vite**. This is what most
frontend jobs actually mean when they say "React" experience.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`). Vite hot-reloads automatically
as you edit files — no manual refresh needed.

To build a production version (what you'd deploy):
```bash
npm run build
```
This outputs static files into a `dist/` folder — drag *that* folder into Netlify, same as before.

## Project structure

```
portfolio-react/
├── index.html          ← the HTML shell Vite boots React into
├── public/
│   └── resume.pdf       ← put your real resume here (see PUT_RESUME_HERE.txt)
└── src/
    ├── main.jsx          ← entry point, mounts <App /> into the page
    ├── App.jsx           ← assembles all the sections in order
    ├── data.js           ← ⭐ ALL your editable content lives here
    ├── styles.css         ← all CSS (same design as before, same class names)
    ├── components/        ← one file per section
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   ├── TechStack.jsx
    │   ├── Experience.jsx
    │   ├── Education.jsx
    │   ├── Blogs.jsx
    │   ├── Resume.jsx
    │   └── Footer.jsx
    └── hooks/              ← reusable logic, extracted out of components
        ├── useTheme.js       (light/dark toggle + persistence)
        ├── useTypingEffect.js (the hero role typewriter effect)
        └── useReveal.js       (fade-in on scroll)
```

## What to edit

**99% of your changes happen in `src/data.js`.** It's one file with plain JavaScript
arrays/objects — your name, projects, tech stack, experience, education, blogs, and social links.
Change the data there and every section updates automatically, same as before.

For your resume: drop `resume.pdf` into the `public/` folder (delete the placeholder `.txt` file).

## Old vanilla JS → React, mapped

If you're learning React off the back of the old single-file version, here's how the same ideas
translate:

| Old (vanilla JS) | New (React) |
|---|---|
| One giant `<script>` tag | Logic split into small files: `components/` (what renders) and `hooks/` (reusable behavior) |
| `document.getElementById(...).innerHTML = ...` | Components return JSX directly — React updates the DOM for you, no manual `innerHTML` |
| `PROJECTS` array + `renderProjects()` function looping over it | `PROJECTS` array in `data.js` + `Projects.jsx` maps over it with `.map()` — same idea, cleaner split between data and rendering |
| `let projectsExpanded = false` (a loose variable) | `const [expanded, setExpanded] = useState(false)` — React's `useState` tracks this per-component and re-renders automatically when it changes |
| `addEventListener('click', ...)` | `onClick={...}` directly on the JSX element |
| `localStorage` + manually toggling `data-theme` attribute | Same idea, wrapped in a reusable `useTheme()` hook so any component can use it |
| `IntersectionObserver` copy-pasted per use | Wrapped in `useReveal()` — one hook, used in every section via `const ref = useReveal()` |

The biggest shift: instead of writing code that *finds and mutates* HTML elements, in React you
write a function that *describes* what the UI should look like for a given piece of data/state —
React figures out what changed and updates the page itself.

## Deploying

Same as before — Netlify, Vercel, or GitHub Pages all work. The only difference: since this is now
a real build step (not a single static file), run `npm run build` first and deploy the `dist/`
folder it generates, rather than dragging the raw source folder in.

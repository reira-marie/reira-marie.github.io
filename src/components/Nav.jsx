import { PROFILE } from "../data";

const LINKS = [
  { href: "#about", idx: "01", label: "about" },
  { href: "#projects", idx: "02", label: "projects" },
  { href: "#experience", idx: "03", label: "experience" },
  { href: "#education", idx: "04", label: "education" },
  { href: "#resume", idx: "05", label: "resume" },
];

export default function Nav({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          {PROFILE.brand}
          <span className="dot">.</span>dev
        </a>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} data-idx={link.idx}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle light/dark theme"
          title="Toggle light/dark theme"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

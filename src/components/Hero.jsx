import { PROFILE, ROLES } from "../data";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function Hero() {
  const roleText = useTypingEffect(ROLES);

  return (
    <header className="hero">
      <div className="terminal">
        <div className="terminal-bar">
          <div className="tl">
            <span className="r"></span>
            <span className="y"></span>
            <span className="g"></span>
          </div>
          <span className="filename">~/portfolio/about.me</span>
        </div>
        <div className="terminal-body">
          <img className="avatar" src={PROFILE.photo} alt="Profile photo placeholder — replace with your own" />
          <div>
            <h1 className="hero-name">{PROFILE.name}</h1>
            <p className="hero-role">
              {roleText}
              <span className="caret"></span>
            </p>
            <div className="hero-meta">
              <span>📍 {PROFILE.location}</span>
              <span>🟢 {PROFILE.status}</span>
            </div>
            <div className="hero-links">
              <a className="pill" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="pill" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="pill" href={`mailto:${PROFILE.email}`}>Email</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

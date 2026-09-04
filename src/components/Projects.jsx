import { useState } from "react";
import { PROJECTS, INITIAL_VISIBLE_PROJECTS } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hasMore = PROJECTS.length > INITIAL_VISIBLE_PROJECTS;

  return (
    <section id="projects" className="reveal" ref={ref}>
      <p className="section-label">projects</p>
      <h2 className="section-title">Things I've built</h2>
      <div className="projects">
        {visible.map((p) => (
          <div className="project-card" key={p.name}>
            <div className="project-top">
              <h3 className="project-name">{p.name}</h3>
              <div className="badges">
                <span className="badge">{p.type}</span>
                <span className={`badge ${p.status}`}>{p.status}</span>
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
              {p.link} →
            </a>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="show-more" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "show less ↑" : "show more ↓"}
        </button>
      )}
    </section>
  );
}

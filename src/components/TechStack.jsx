import { TECH_STACK } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function TechStack() {
  const ref = useReveal();
  const looped = [...TECH_STACK, ...TECH_STACK]; // duplicated for a seamless scroll loop

  return (
    <section id="stack" className="reveal" ref={ref}>
      <p className="section-label">stack</p>
      <h2 className="section-title">Tools I reach for</h2>
      <div className="marquee">
        <div className="marquee-track">
          {looped.map((tech, i) => (
            <span className="tech-chip" key={`${tech}-${i}`}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

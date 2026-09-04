import { EDUCATION } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="reveal" ref={ref}>
      <p className="section-label">education</p>
      <h2 className="section-title">Where I studied</h2>
      <div className="timeline">
        {EDUCATION.map((item) => (
          <div className="tl-item" key={item.role + item.date}>
            <span className="tl-date">{item.date}</span>
            <div>
              <p className="tl-role">{item.role}</p>
              <p className="tl-org">{item.org}</p>
              <p className="tl-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

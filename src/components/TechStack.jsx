import { TECH_STACK } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function TechStack() {
  const ref = useReveal();

  return (
    <section id="stack" className="reveal" ref={ref}>
      <p className="section-label">stack</p>
      <h2 className="section-title">Tools I reach for</h2>
      <div className="stack-rows">
        {TECH_STACK.map((group, rowIndex) => {
          const looped = [...group.items, ...group.items];
          const reverse = rowIndex % 2 !== 0;
          return (
            <div className="stack-row" key={group.category}>
              <span className="stack-category">{group.category}</span>
              <div className="marquee">
                <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
                  {looped.map((tech, i) => (
                    <span className="tech-chip" key={`${tech}-${i}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

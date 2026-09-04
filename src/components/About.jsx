import { PROFILE } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  const { building } = PROFILE;

  return (
    <section id="about" className="reveal" ref={ref}>
      <p className="section-label">about</p>
      <h2 className="section-title">Who I am</h2>
      <div className="about-text">
        <p>
  I’m a <strong>front-end developer</strong> who cares about making things feel as good as they work. I build with <strong>React</strong> and <strong>Flutter</strong>, turning ideas and designs into clean, responsive, and enjoyable interfaces. I’m currently deepening my React skills while exploring <strong>design systems and accessibility</strong>, and I’m looking for a front-end role where I can focus on creating thoughtful user experiences.
</p>
<p>
  Outside of coding, I enjoy <strong>making slimes</strong> and <strong>going on long walks</strong>.
</p>

      </div>

      <div className="contrib-card" style={{ marginTop: 26 }}>
        <div className="contrib-head">
          <span>currently building</span>
          <span className="building-status">🟢 in progress</span>
        </div>
        <p className="building-title">{building.title}</p>
        <p className="building-desc">{building.desc}</p>
        <div className="building-tags">
          {building.tags.map((tag) => (
            <span className="tech-chip" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

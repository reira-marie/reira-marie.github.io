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
          I'm a <strong>front-end developer</strong> who cares about how things feel to use, not just how they work. I build with React and Flutter, and I like turning a rough idea or a Figma design into an interface that's clean, responsive, and actually pleasant to use — down to the small details like transitions and load states. Right now I'm deepening my React skills and paying closer attention to design systems and accessibility as I look for a front-end role where UI is the focus.
        </p>
        <p>
          Outside of writing code I like <strong>making slimes</strong>, <strong>walking</strong>, and occasionally
          writing about what I've learned — see the <a href="#blogs">blogs</a> section below.
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

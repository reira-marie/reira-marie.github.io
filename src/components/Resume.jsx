import { PROFILE } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Resume() {
  const ref = useReveal();

  return (
    <section id="resume" className="reveal" ref={ref}>
      <p className="section-label">resume</p>
      <h2 className="section-title">Get the full picture</h2>
      <div className="resume-cta">
        <p>View my full work history, education, and skills.</p>
        <div className="resume-btns">
          <a className="btn btn-outline" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            Preview ↗
          </a>
          <a className="btn" href="/Resume.pdf" download={`${PROFILE.name.replace(/\s+/g, "-")}-Resume.pdf`}>
            Download ↓
          </a>
        </div>
      </div>
    </section>
  );
}

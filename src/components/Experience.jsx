import { EXPERIENCE, CERTIFICATIONS } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="reveal" ref={ref}>
      <p className="section-label">experience</p>
      <h2 className="section-title">Where I've worked</h2>
      <div className="timeline">
        {EXPERIENCE.map((item) => (
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

      <p className="section-label" style={{ marginTop: 40 }}>certifications</p>
      <h2 className="section-title" style={{ marginBottom: 14 }}>Credentials</h2>
      <div className="cert-grid">
        {CERTIFICATIONS.map((cert) => (
          <div className="cert-card" key={cert.name + cert.issuer}>
            <p className="cname">{cert.name}</p>
            <p className="cissuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

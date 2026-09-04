import { BLOGS } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Blogs() {
  const ref = useReveal();

  return (
    <section id="blogs" className="reveal" ref={ref}>
      <p className="section-label">blogs</p>
      <h2 className="section-title">Things I've written</h2>
      <div className="blog-grid">
        {BLOGS.map((post) => (
          <a className="blog-card" href={post.link} key={post.title}>
            <span className="blog-date">{post.date}</span>
            <p className="blog-title">{post.title}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

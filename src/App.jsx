import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <div className="wrap">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Education />
        <Blogs />
        <Resume />
      </div>
      <Footer />
    </>
  );
}

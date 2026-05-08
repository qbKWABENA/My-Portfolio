import { Toaster } from "sonner";
import { SmoothScroll } from "./components/SmoothScroll";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";

function Shell() {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen selection:bg-[var(--forest)] selection:text-[var(--ink-inverse)]"
      style={{ background: "var(--bg)", color: "var(--ink)" }}
    >
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster theme={theme} position="bottom-right" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}

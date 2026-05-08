import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    title: "GCTU News Bot",
    tag: "Web Scraper · Jun – Aug 2025",
    description:
      "An automated Telegram bot that bridges the Ghana Communication Technology University's official site and its community. It continuously scrapes the announcements page, formats the content, and delivers it through an interactive Telegram interface — with smart filtering, subscription management for daily digests, and persistent storage of user preferences.",
    tech: ["Python", "Web Scraping", "Telegram API"],
    link: "", // ← drop GitHub URL here
    bg: "var(--ink)",
    text: "var(--ink-inverse)",
    accent: "var(--gold)",
  },
  {
    title: "Portfolio Site (v1)",
    tag: "Web · Nov – Dec 2025",
    description:
      "My first web design and development project — a static portfolio built from scratch using only HTML and CSS to highlight foundational front-end skills.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://qbkwabena.github.io/My-Profile/",
    bg: "var(--forest)",
    text: "#f0ece4",
    accent: "var(--gold)",
  },
  {
    title: "Brand Identity Work",
    tag: "Design · 2020 → Present",
    description:
      "Five+ years of freelance graphic design — translating client ideas into modern visuals. Logos, social kits, and full brand identities that have led to repeat business and long-term client relationships.",
    tech: ["Branding", "Logo", "Visual"],
    link: "", // ← drop GitHub URL here
    bg: "var(--gold)",
    text: "#1a1a1a",
    accent: "#1a1a1a",
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 lg:py-48 overflow-hidden"
      style={{ background: "var(--bg-inverse)", color: "var(--ink-inverse)" }}
    >
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -left-40 size-[600px] opacity-20 -z-0 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, var(--forest), var(--gold), var(--forest))",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10">
        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 sm:mb-8"
            style={{ color: "var(--gold)" }}
          >
            <span>04 /</span>
            <span>Selected Work</span>
            <span className="h-px flex-1" style={{ background: "var(--line-inverse)" }} />
          </motion.div>

          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2rem, 7vw, 6rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em" }}
          >
            <SplitReveal>Things I've built</SplitReveal>
            <SplitReveal delay={0.15}>
              <em style={{ color: "var(--gold)" }}>& shipped.</em>
            </SplitReveal>
          </h2>
        </div>

        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto space-y-6 lg:space-y-0">
          {projects.map((p, i) => (
            <StickyCard key={p.title} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 1]);

  return (
    <div
      ref={ref}
      className="lg:sticky"
      style={{ top: `calc(${index * 4 + 6}vh)` }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_50px_80px_-30px_rgba(0,0,0,0.6)]"
      >
        <div
          className="grid lg:grid-cols-12 gap-5 sm:gap-6 p-6 sm:p-8 lg:p-10"
          style={{ background: project.bg, color: project.text }}
        >
          <div className="lg:col-span-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] opacity-60">
            0{index + 1}/0{total}
          </div>

          <div className="lg:col-span-11 flex flex-col gap-5 sm:gap-6">
            <div>
              <div
                className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2 sm:mb-3"
                style={{ color: project.accent }}
              >
                {project.tag}
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {project.title}
              </h3>
              <p
                className="mt-3 sm:mt-4 max-w-3xl"
                style={{ lineHeight: 1.65, fontSize: "clamp(0.9rem, 1.2vw, 1rem)", opacity: 0.85 }}
              >
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-auto">
              <div className="flex flex-wrap gap-2 mr-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider border"
                    style={{
                      borderColor: `color-mix(in srgb, ${project.text} 25%, transparent)`,
                      color: project.text,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full"
                  style={{ background: project.accent, color: project.bg }}
                >
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em]">View on GitHub</span>
                  <span
                    className="size-6 rounded-full grid place-items-center group-hover:rotate-45 transition-transform duration-500"
                    style={{ background: project.bg, color: project.accent }}
                  >
                    <ArrowUpRight className="size-3" />
                  </span>
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] border border-dashed"
                  style={{
                    borderColor: `color-mix(in srgb, ${project.text} 35%, transparent)`,
                    color: `color-mix(in srgb, ${project.text} 70%, transparent)`,
                  }}
                  title="Add a GitHub URL in the projects array"
                >
                  Add GitHub link
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function SplitReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

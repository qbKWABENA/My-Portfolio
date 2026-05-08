import { motion } from "motion/react";
import { Tilt } from "./Tilt";
import { Marquee } from "./Marquee";

const ease = [0.16, 1, 0.3, 1] as const;

const groups = [
  {
    title: "Technical",
    icon: "⌘",
    bg: "var(--ink)",
    text: "var(--ink-inverse)",
    accent: "var(--gold)",
    items: ["Python", "Linux", "Networking", "Cryptography", "Threat Analysis", "Incident Response", "Risk Management"],
  },
  {
    title: "Tools",
    icon: "✦",
    bg: "var(--gold)",
    text: "#1a1a1a",
    accent: "#1a1a1a",
    items: ["VS Code", "Git", "GitHub", "MS Teams", "Office Suite", "Design Suite", "Zoom"],
  },
  {
    title: "Soft Skills",
    icon: "♥",
    bg: "var(--forest)",
    text: "#f0ece4",
    accent: "var(--gold)",
    items: ["Critical Thinking", "Quick Learner", "Adaptability", "Teamwork", "Communication", "Problem Solving"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--bg)" }}>
      <Marquee text="Capabilities · Toolset · Mindset" speed={45} />

      <div className="px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-10 sm:mb-12"
          style={{ color: "var(--ink-soft)" }}
        >
          <span style={{ color: "var(--forest)" }}>02 /</span>
          <span>Capabilities</span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </motion.div>

        <h2
          className="font-serif mb-12 sm:mb-16 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--ink)" }}
        >
          A toolkit shaped by<br/>
          <em style={{ color: "var(--forest)" }}>curiosity & craft.</em>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: gi * 0.15, ease }}
            >
              <Tilt max={6}>
                <div
                  className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
                  style={{ background: g.bg, color: g.text }}
                >
                  <div className="flex items-start justify-between mb-10 sm:mb-12">
                    <div
                      className="size-12 sm:size-14 rounded-full grid place-items-center font-serif italic"
                      style={{ background: g.accent, color: g.bg, fontSize: "1.25rem" }}
                    >
                      {g.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] opacity-60">
                      0{gi + 1}
                    </span>
                  </div>

                  <h3
                    className="font-serif mb-6 sm:mb-8"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
                  >
                    {g.title}
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {g.items.map((it, i) => (
                      <motion.li
                        key={it}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: gi * 0.1 + i * 0.05, ease }}
                        className="flex items-center gap-3 text-xs sm:text-sm border-b py-1.5 sm:py-2"
                        style={{ borderColor: `color-mix(in srgb, ${g.text} 18%, transparent)` }}
                      >
                        <span style={{ color: g.accent }}>—</span>
                        <span style={{ opacity: 0.9 }}>{it}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

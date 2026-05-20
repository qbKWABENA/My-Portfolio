import { motion } from "motion/react";
import { Tilt } from "./Tilt";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    role: "IT & Cybersecurity Intern",
    company: "Enterprise Insurance",
    location: "Accra, Ghana",
    period: "2025",
    range: "Sep — Nov",
    points: [
      "IT infrastructure management & hardware diagnostics",
      "Enterprise networking & incident response",
      "Security policy implementation",
      "Data backup & business continuity planning",
    ],
    bg: "var(--ink)",
    text: "var(--ink-inverse)",
    accent: "var(--gold)",
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    location: "Accra, Ghana",
    period: "2020 — Present",
    range: "Dec",
    points: [
      "Brand identity systems & visual design",
      "Logos, social kits, marketing assets",
      "Direct client collaboration & iteration",
      "Repeat clients across multiple sectors",
    ],
    bg: "var(--forest)",
    text: "#f0ece4",
    accent: "var(--gold)",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: "var(--bg)" }}>
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -right-32 size-[400px] rounded-full -z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--gold) 20%, transparent) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8"
          style={{ color: "var(--ink-soft)" }}
        >
          <span style={{ color: "var(--forest)" }}>03 /</span>
          <span>Experience</span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </motion.div>

        <h2
          className="font-serif mb-16 sm:mb-20 max-w-4xl"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--ink)" }}
        >
          A short, <em style={{ color: "var(--forest)" }}>but meaningful</em> path.
        </h2>

        <div className="space-y-8 sm:space-y-10">
          {items.map((it, i) => (
            <motion.article
              key={it.role}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.1, ease }}
              className={`flex ${i % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
            >
              <div className="w-full lg:w-[88%]">
                <Tilt max={4}>
                  <div
                    className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_40px_70px_-25px_rgba(0,0,0,0.3)] overflow-hidden"
                    style={{ background: it.bg, color: it.text }}
                  >
                    <span
                      className="absolute -top-6 -right-4 font-serif italic pointer-events-none select-none opacity-15"
                      style={{ fontSize: "clamp(5rem, 16vw, 14rem)", lineHeight: 1, color: it.accent, letterSpacing: "-0.05em" }}
                    >
                      {it.period}
                    </span>

                    <div className="relative grid lg:grid-cols-12 gap-6 sm:gap-8">
                      <div className="lg:col-span-5">
                        <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-3" style={{ color: it.accent }}>
                          {it.range} · {it.period}
                        </div>
                        <h3
                          className="font-serif"
                          style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                        >
                          {it.role}
                        </h3>
                        <div className="mt-3 text-xs sm:text-sm" style={{ opacity: 0.7 }}>
                          {it.company} · {it.location}
                        </div>
                      </div>

                      <ul className="lg:col-span-7 space-y-2 sm:space-y-3">
                        {it.points.map((p, pi) => (
                          <motion.li
                            key={p}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + pi * 0.07, ease }}
                            className="flex gap-3 items-baseline border-b py-2 sm:py-2.5 text-xs sm:text-sm"
                            style={{ borderColor: `color-mix(in srgb, ${it.text} 15%, transparent)`, lineHeight: 1.5 }}
                          >
                            <span style={{ color: it.accent }}>+</span>
                            <span style={{ opacity: 0.9 }}>{p}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tilt>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

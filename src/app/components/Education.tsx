import { motion } from "motion/react";
import { Tilt } from "./Tilt";

const ease = [0.16, 1, 0.3, 1] as const;

const education = [
  {
    school: "Ghana Communication Technology University",
    degree: "Diploma · Information Security",
    period: "2025 →",
    bg: "var(--ink)",
    text: "var(--ink-inverse)",
    accent: "var(--gold)",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    school: "St. Johns Grammar Senior High",
    degree: "WASSCE",
    period: "2020–23",
    bg: "var(--gold)",
    text: "#1a1a1a",
    accent: "#1a1a1a",
    span: "lg:col-span-3",
  },
  {
    school: "Nsawam Presbyterian Basic",
    degree: "BECE",
    period: "2019",
    bg: "var(--surface)",
    text: "var(--ink)",
    accent: "var(--forest)",
    border: true,
    span: "lg:col-span-3",
  },
];

const certs = [
  { title: "Python Programming", body: "Data structures, control flow & automation scripting.", bg: "var(--forest)", text: "#f0ece4", accent: "var(--gold)" },
  { title: "IT at Workplace", body: "Zoom, MS Teams, Office for productivity.", bg: "var(--surface)", text: "var(--ink)", accent: "var(--forest)", border: true },
  { title: "Python & AI", body: "Hands-on AI integration with Python.", bg: "var(--ink)", text: "var(--ink-inverse)", accent: "var(--gold)" },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8"
          style={{ color: "var(--ink-soft)" }}
        >
          <span style={{ color: "var(--forest)" }}>05 /</span>
          <span>Background</span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </motion.div>

        <h2
          className="font-serif mb-12 sm:mb-16 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--ink)" }}
        >
          Education, <em style={{ color: "var(--ink-mute)" }}>grounded.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {education.map((e, i) => (
            <Card key={e.school} item={e} index={i} className={e.span} />
          ))}
        </div>

        <h2
          className="font-serif mb-10 sm:mb-12 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--ink)" }}
        >
          Certifications, <em style={{ color: "var(--ink-mute)" }}>continuous.</em>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {certs.map((c, i) => (
            <Card key={c.title} item={{ school: c.title, degree: c.body, period: `0${i + 1}`, ...c }} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  index,
  className = "",
}: {
  item: any;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease }}
      whileHover={{ y: -6 }}
      className={className}
    >
      <Tilt max={6}>
        <div
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between min-h-[180px] sm:min-h-[200px] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)] overflow-hidden"
          style={{
            background: item.bg,
            color: item.text,
            border: item.border ? "1px solid var(--line-strong)" : "none",
          }}
        >
          <div className="flex items-start justify-between">
            <span
              className="font-serif italic"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: item.accent }}
            >
              {item.period}
            </span>
            <span className="size-7 sm:size-8 rounded-full grid place-items-center" style={{ border: `1px solid color-mix(in srgb, ${item.text} 28%, transparent)` }}>
              <span className="text-[10px] sm:text-xs">↗</span>
            </span>
          </div>
          <div className="mt-8 sm:mt-10">
            <h3 className="font-serif" style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {item.school}
            </h3>
            <div className="mt-2 text-xs sm:text-sm" style={{ opacity: 0.7 }}>
              {item.degree}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

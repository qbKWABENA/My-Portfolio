import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Tilt } from "./Tilt";

const ease = [0.16, 1, 0.3, 1] as const;

const words =
  `Cybersecurity & Systems Analyst in training at Ghana Communication Technology University, with a strong foundation in computer architecture, Linux, and Python scripting. I have freelanced as a graphic designer since 2020, and recently completed an IT and cybersecurity internship at Enterprise Insurance covering infrastructure, networking, and incident response.`.split(" ");

const cards = [
  { num: "5+", label: "Years Designing", bg: "var(--forest)", color: "var(--ink-inverse)" },
  { num: "3", label: "Certificates", bg: "var(--gold)", color: "#1a1a1a" },
  { num: "1", label: "Internship", bg: "var(--ink)", color: "var(--ink-inverse)" },
  { num: "4", label: "Languages", bg: "var(--surface)", color: "var(--ink)", border: true },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.4"] });

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-10 overflow-hidden" style={{ background: "var(--bg)" }}>
      <motion.div
        aria-hidden
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease }}
        className="absolute -top-20 -right-32 size-[500px] rounded-full -z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--forest) 18%, transparent) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-10 sm:mb-12"
          style={{ color: "var(--ink-soft)" }}
        >
          <span style={{ color: "var(--forest)" }}>01 /</span>
          <span>About — A short note</span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </motion.div>

        <div ref={ref} className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <p
              className="font-serif"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", lineHeight: 1.25, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--ink-mute)" }}
            >
              {words.map((w, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>;
              })}
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4 self-start lg:sticky lg:top-32">
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease }}
                whileHover={{ y: -6, rotate: 0, scale: 1.04 }}
              >
                <Tilt max={8} className="will-change-transform">
                  <div
                    className="aspect-square p-4 sm:p-5 rounded-2xl flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
                    style={{
                      background: c.bg,
                      color: c.color,
                      border: c.border ? "1px solid var(--line-strong)" : "none",
                    }}
                  >
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-70">0{i + 1}</span>
                    <div>
                      <div className="font-serif" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {c.num}
                      </div>
                      <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider opacity-80">{c.label}</div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]" >
      {children}
    </motion.span>
  );
}

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Section({
  id,
  eyebrow,
  number,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  number?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 lg:py-32 border-b border-[#e6e1d6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
            }}
            className="lg:col-span-2 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8a857d]"
          >
            <span className="text-[#2d4a3e]">{number ?? "—"}</span>
            <span>{eyebrow}</span>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
            }}
            className="lg:col-span-7 overflow-hidden"
          >
            <h2
              className="text-[#1a1a1a]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em" }}
            >
              {title}
            </h2>
          </motion.div>
          {description && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              className="lg:col-span-3"
            >
              <p className="text-[#6b6b66] text-sm" style={{ lineHeight: 1.65 }}>{description}</p>
            </motion.div>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

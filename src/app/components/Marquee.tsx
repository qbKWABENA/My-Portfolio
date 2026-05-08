import { motion } from "motion/react";

export function Marquee({
  text,
  speed = 30,
  italic = true,
  reverse = false,
}: {
  text: string;
  speed?: number;
  italic?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden py-6 select-none">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className={`flex whitespace-nowrap font-serif ${italic ? "italic" : ""}`}
        style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.03em" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="px-8 inline-flex items-center">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px currentColor" }}
            >
              {text}
            </span>
            <span className="inline-block mx-8 size-3 rounded-full" style={{ background: "var(--forest)" }} />
            <span>{text}</span>
            <span className="inline-block mx-8 size-3 rounded-full" style={{ background: "var(--gold)" }} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

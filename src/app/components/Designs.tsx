import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  "/Pictures/04112661e97e3ccba6176d69c49ba8a5.jpg",
  "/Pictures/26287fb98ba49ae1162cdbe0f75aabce.jpg",
  "/Pictures/2709d438561c2e76c74ff7fcc66741d6.jpg",
  "/Pictures/40557a5420ff4a59d2eed61cedd88bac.jpg",
  "/Pictures/49bf5a49064741ce4ed890da7d89d40a.jpg",
  "/Pictures/b0023bf72c24575f1ec6c8fd99f192b7.jpg",
  "/Pictures/b3fe432ed5a9e128e098c0430487ee25.jpg",
  "/Pictures/d16e6c65867e9395081a3e2566bc364f.jpg",
  "/Pictures/Desktop - 1.png",
  "/Pictures/fec20216081b39350b9d14a159ff098d.jpg",
  "/Pictures/Hackman e.png",
  "/Pictures/kline 2.png",
  "/Pictures/Personal Portfolio Website Template (Community).png",
  "/Pictures/site.png"
];

export function Designs() {
  return (
    <section id="designs" className="py-24 sm:py-32 lg:py-48" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 sm:mb-8"
          style={{ color: "var(--forest)" }}
        >
          <span>05 /</span>
          <span>Design Gallery</span>
          <span className="h-px flex-1" style={{ background: "var(--line)" }} />
        </div>

        <h2
          className="font-serif"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.04em" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Visual Explorations
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.em
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block"
              style={{ color: "var(--forest)" }}
            >
              & graphic work.
            </motion.em>
          </span>
        </h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((src, idx) => (
            <DesignImage key={src} src={src} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignImage({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, borderColor: "var(--line)" }}
      className="relative overflow-hidden rounded-2xl group border break-inside-avoid mb-4 sm:mb-6 lg:mb-8 block"
    >
      <div className="bg-[var(--bg-alt)]">
        <img
          src={src}
          alt={`Design ${index + 1}`}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-105 block"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

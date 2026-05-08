import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import profileImg from "../../imports/qb.jpeg";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgRot = useTransform(scrollYProgress, [0, 1], [-3, 8]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.82]);
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const cardForestY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const cardForestRot = useTransform(scrollYProgress, [0, 1], [-4, -16]);
  const cardGoldY = useTransform(scrollYProgress, [0, 1], ["0px", "-90px"]);
  const cardGoldRot = useTransform(scrollYProgress, [0, 1], [2, 14]);
  const haloRot = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const chipBottomY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const chipTopY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease }}
        className="absolute top-0 left-0 right-0 z-20 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto flex justify-between text-[10px] sm:text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-soft)" }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="size-2 rounded-full" style={{ background: "var(--forest)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--forest) 20%, transparent)" }} />
          Available · 2026
        </div>
        <div className="text-right hidden sm:block">
          Accra<br />
          <span style={{ color: "var(--ink)" }}>Ghana, GMT</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: titleY }}
        className="relative z-10 min-h-screen grid lg:grid-cols-12 gap-8 lg:gap-6 items-center px-4 sm:px-6 lg:px-10 pt-32 sm:pt-40 pb-20 sm:pb-24 max-w-[1400px] mx-auto"
      >
        <div className="lg:col-span-6 relative">
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 9rem)",
              lineHeight: 0.85,
              fontWeight: 400,
              letterSpacing: "-0.05em",
              color: "var(--ink)",
            }}
          >
            <Reveal delay={0.2}><span className="block">Bismark</span></Reveal>
            <Reveal delay={0.35}>
              <span className="block italic relative">
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--ink)" }}>Kwabena</span>
              </span>
            </Reveal>
            <Reveal delay={0.5}>
              <span className="block">
                Quansah<span className="not-italic" style={{ color: "var(--forest)" }}>.</span>
              </span>
            </Reveal>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Magnetic>
              <a
                href="/cv.pdf"
                download
                className="group relative inline-flex items-center gap-3 pl-5 sm:pl-7 pr-2 sm:pr-3 py-2 rounded-full text-xs sm:text-sm uppercase tracking-[0.15em] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] transition-colors"
                style={{ background: "var(--ink)", color: "var(--ink-inverse)" }}
              >
                Download CV
                <span className="size-9 sm:size-10 rounded-full grid place-items-center transition-colors" style={{ background: "var(--forest)" }}>
                  <ArrowDown className="size-4" />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.15em] transition-colors"
                style={{ color: "var(--ink)" }}
              >
                <span className="relative">
                  Get in touch
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-current" />
                </span>
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          <motion.div
            style={{ rotate: imgRot, x: imgX, scale: imgScale }}
            className="relative w-[300px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[620px]"
          >
            <motion.div
              aria-hidden
              style={{ rotate: haloRot }}
              className="absolute -inset-10 rounded-full opacity-40 -z-10 pointer-events-none"
            >
              <div
                className="size-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--forest), transparent 30%, var(--gold), transparent 70%, var(--forest))",
                  filter: "blur(50px)",
                }}
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, var(--forest), var(--ink))",
                rotate: cardForestRot,
                y: cardForestY,
                x: -12,
              }}
            />
            <motion.div
              className="absolute -inset-2 rounded-2xl"
              style={{
                background: "var(--gold)",
                rotate: cardGoldRot,
                y: cardGoldY,
                x: 8,
              }}
            />

            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.6, delay: 0.7, ease }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.55)]"
            >
              <motion.img
                style={{ y: imgY }}
                src={profileImg}
                alt="Bismark Quansah"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-2xl" style={{ borderColor: "var(--line)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease }}
              className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl"
              style={{ background: "var(--ink)", color: "var(--ink-inverse)", y: chipBottomY }}
            >
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>Studying</div>
              <div className="text-xs sm:text-sm">Cybersecurity · GCTU</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl border"
              style={{ background: "var(--bg)", color: "var(--ink)", borderColor: "var(--line-strong)", y: chipTopY }}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em]">BQ.001</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="lg:col-span-12 grid sm:grid-cols-12 gap-6 lg:gap-10 mt-4 lg:mt-12 pt-6 sm:pt-8 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="sm:col-span-3 text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-soft)" }}>
            (Now)<br />
            <span style={{ color: "var(--ink)" }}>Cybersecurity Student<br/>& Graphic Designer</span>
          </div>
          <p
            className="sm:col-span-6"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.0625rem)", lineHeight: 1.65, color: "var(--ink-soft)" }}
          >
            Building at the intersection of <em className="font-serif" style={{ color: "var(--ink)" }}>code, security & visual storytelling</em> — currently freelancing, studying, and shipping side projects from Accra.
          </p>
          <div className="sm:col-span-3 sm:text-right text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-soft)" }}>
            (Scroll)<br />
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
              style={{ color: "var(--ink)" }}
            >
              ↓ Discover
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%", rotate: 8 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 1.3, delay, ease }}
        className="block origin-bottom-left"
      >
        {children}
      </motion.span>
    </span>
  );
}

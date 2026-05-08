import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Globe, Mail, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/qbKWABENA", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "https://qbkwabena.github.io/My-Profile/", label: "Web" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Accra" }));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <nav className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 flex items-center justify-between text-white gap-4">
          <a href="#home" className="font-serif italic shrink-0" style={{ fontSize: "1.125rem" }}>
            Bismark<span className="not-italic">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[10px] lg:text-xs uppercase tracking-[0.2em]">
            <span className="opacity-70">Accra</span>
            <span>{time} GMT</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle className="text-white" />
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[0.2em]"
            >
              <span className="hidden sm:block">Menu</span>
              <span className="flex flex-col gap-1">
                <span className="block w-6 h-px bg-current" />
                <span className="block w-4 h-px bg-current ml-auto" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "var(--bg)", color: "var(--ink)" }}
          >
            <div
              className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-5 sm:py-6 border-b"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="font-serif italic" style={{ fontSize: "1.125rem" }}>
                Bismark<span className="not-italic" style={{ color: "var(--forest)" }}>.</span>
              </span>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] flex items-center gap-2 sm:gap-3"
                >
                  <span>Close</span>
                  <span
                    className="size-8 rounded-full grid place-items-center text-base border"
                    style={{ borderColor: "var(--line-strong)" }}
                  >
                    ×
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-1 grid lg:grid-cols-12 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-8 lg:py-10 overflow-auto">
              <ul className="lg:col-span-8 space-y-1 sm:space-y-2 self-center">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-3 sm:py-5 transition-colors"
                    >
                      <span
                        className="font-serif group-hover:italic transition-all"
                        style={{ fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                      >
                        {l.label}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest" style={{ color: "var(--ink-mute)" }}>
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-4 self-end space-y-5 sm:space-y-6 text-sm"
                style={{ color: "var(--ink-soft)" }}
              >
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--ink-mute)" }}>Email</div>
                  <a href="mailto:quansahbismark1234@gmail.com" className="inline-flex items-center gap-2 break-all hover:opacity-70">
                    <Mail className="size-4 shrink-0" /> quansahbismark1234@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--ink-mute)" }}>Phone</div>
                  <a href="tel:+233539657804" className="inline-flex items-center gap-2 hover:opacity-70">
                    <Phone className="size-4 shrink-0" /> +233 53 965 7804
                  </a>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--ink-mute)" }}>Socials</div>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="size-10 rounded-full grid place-items-center border hover:bg-[var(--ink)] hover:text-[var(--ink-inverse)] transition-colors"
                        style={{ borderColor: "var(--line-strong)" }}
                      >
                        <s.icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

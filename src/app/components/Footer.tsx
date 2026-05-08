import { Github, Linkedin, Globe, Twitter, Instagram } from "lucide-react";
import { Marquee } from "./Marquee";

const socials = [
  { icon: Github, href: "https://github.com/qbKWABENA", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "https://qbkwabena.github.io/My-Profile/", label: "Web" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer
      className="relative pt-10 sm:pt-12 pb-6 sm:pb-8 overflow-hidden"
      style={{ background: "var(--bg-inverse)", color: "var(--ink-inverse)" }}
    >
      <div className="opacity-90">
        <Marquee text="Bismark Kwabena Quansah" speed={50} reverse />
      </div>

      <div className="mt-10 sm:mt-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 sm:items-end text-[10px] sm:text-xs uppercase tracking-[0.25em]">
        <div className="opacity-50 order-2 sm:order-1">
          © {new Date().getFullYear()} · All rights reserved
        </div>
        <div className="sm:text-center order-3 sm:order-2 flex flex-wrap sm:justify-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="size-9 rounded-full grid place-items-center border hover:bg-[var(--gold)] hover:text-[#1a1a1a] hover:border-[var(--gold)] transition-all"
              style={{ borderColor: "var(--line-inverse)" }}
            >
              <s.icon className="size-3.5" />
            </a>
          ))}
        </div>
        <div className="sm:text-right order-1 sm:order-3">
          <a
            href="#home"
            className="group inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: "var(--gold)" }}
          >
            Back to top
            <span className="inline-block group-hover:-translate-y-1 transition-transform">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

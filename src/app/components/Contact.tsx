import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ArrowUpRight, Github, Linkedin, Globe, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Magnetic } from "./Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { icon: Github, href: "https://github.com/qbKWABENA", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bismark-quansah-a549162b4/", label: "LinkedIn" },
  { icon: Globe, href: "https://my-portfolio-beryl-tau-11.vercel.app/", label: "Web" },
  { icon: Twitter, href: "https://twitter.com/qb_graphics_1", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/qb_graphics_1/", label: "Instagram" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/xqejpynl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent! I'll respond soon.");
      } else {
        const data = await res.json().catch(() => null);
        const err = data?.error || "Failed to send message. Please try again.";
        toast.error(err);
      }
    } catch (err) {
      toast.error("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ background: "var(--bg-inverse)", color: "var(--ink-inverse)" }}
    >
      <motion.div
        aria-hidden
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 size-[700px] opacity-25 -z-0 pointer-events-none"
        style={{
          background: "conic-gradient(from 90deg, var(--forest), var(--gold), var(--forest), var(--bg-inverse))",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 sm:mb-8"
          style={{ color: "var(--gold)" }}
        >
          <span>06 /</span>
          <span>Contact</span>
          <span className="h-px flex-1" style={{ background: "var(--line-inverse)" }} />
        </motion.div>

        <h2
          className="font-serif mb-14 sm:mb-20 max-w-5xl"
          style={{ fontSize: "clamp(2.25rem, 11vw, 10rem)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.05em" }}
        >
          <SplitLine>Let's make</SplitLine>
          <SplitLine delay={0.15}>
            <em style={{ color: "var(--gold)" }}>something —</em>
          </SplitLine>
          <SplitLine delay={0.3}>
            <span style={{ opacity: 0.5 }}>together.</span>
          </SplitLine>
        </h2>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] space-y-6 sm:space-y-8"
            style={{ background: "var(--bg)", color: "var(--ink)" }}
          >
            {[
              { key: "name", label: "Your name" },
              { key: "email", label: "Your email" },
            ].map((f) => (
              <div key={f.key} className="border-b pb-3 focus-within:border-[var(--forest)] transition-colors" style={{ borderColor: "var(--line-strong)" }}>
                <label className="text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-soft)" }}>{f.label}</label>
                <input
                  type={f.key === "email" ? "email" : "text"}
                  value={(form as any)[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="mt-2 w-full bg-transparent focus:outline-none font-serif"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", color: "var(--ink)" }}
                />
              </div>
            ))}

            <div className="border-b pb-3 focus-within:border-[var(--forest)] transition-colors" style={{ borderColor: "var(--line-strong)" }}>
              <label className="text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-soft)" }}>Your message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-transparent focus:outline-none resize-none font-serif"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", color: "var(--ink)" }}
              />
            </div>

            <Magnetic strength={0.25}>
              <button
                type="submit"
                disabled={sending}
                className="group relative inline-flex items-center gap-3 pl-5 sm:pl-6 pr-2 py-2 rounded-full transition-colors disabled:opacity-50"
                style={{ background: "var(--ink)", color: "var(--ink-inverse)" }}
              >
                <span className="font-serif italic" style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}>
                  {sending ? "Sending…" : "Send message"}
                </span>
                <span className="size-10 sm:size-12 rounded-full grid place-items-center group-hover:rotate-45 transition-transform duration-500" style={{ background: "var(--gold)", color: "#1a1a1a" }}>
                  <ArrowUpRight className="size-4" />
                </span>
              </button>
            </Magnetic>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <Detail icon={Mail} label="Email" value="quansahbismark1234@gmail.com" href="mailto:quansahbismark1234@gmail.com" />
            <Detail icon={Phone} label="Phone" value="+233 (0) 53 965 7804" href="tel:+233539657804" />
            <Detail icon={MapPin} label="Location" value="Independence Avenue, Accra" />

            <div className="pt-5 mt-2 border-t" style={{ borderColor: "var(--line-inverse)" }}>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-3 sm:mb-4" style={{ color: "var(--gold)" }}>Find me on</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    className="group size-11 sm:size-12 rounded-full grid place-items-center border transition-all hover:bg-[var(--gold)] hover:text-[#1a1a1a] hover:border-[var(--gold)] hover:-translate-y-1"
                    style={{ borderColor: "var(--line-inverse)" }}
                  >
                    <s.icon className="size-4 sm:size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="block group rounded-2xl p-4 sm:p-5 border transition-all hover:border-[var(--gold)]"
      style={{ borderColor: "var(--line-inverse)" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="size-8 rounded-full grid place-items-center" style={{ background: "color-mix(in srgb, var(--gold) 15%, transparent)", color: "var(--gold)" }}>
          <Icon className="size-3.5" />
        </span>
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>{label}</div>
      </div>
      <div className="font-serif break-words" style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", letterSpacing: "-0.02em" }}>
        {value}
      </div>
    </Wrap>
  );
}

function SplitLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

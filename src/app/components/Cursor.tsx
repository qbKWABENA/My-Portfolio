import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.5 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.5 });

  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (matchMedia("(max-width: 768px)").matches) {
      setHidden(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-cursor='view']")) setVariant("view");
      else if (t.closest("a, button, [data-cursor='link']")) setVariant("link");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{
            width: variant === "view" ? 96 : variant === "link" ? 40 : 12,
            height: variant === "view" ? 96 : variant === "link" ? 40 : 12,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 500 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white grid place-items-center"
        >
          {variant === "view" && (
            <span className="text-black text-xs uppercase tracking-widest font-serif italic">View</span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

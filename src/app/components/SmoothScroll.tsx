import { useEffect } from "react";
import Lenis from "lenis";
import { useIsMobile } from "./ui/use-mobile";

export function SmoothScroll() {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Use shorter duration on mobile for better performance
    const duration = isMobile ? 0.6 : 1.4;
    
    const lenis = new Lenis({
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Mobile optimization: prevent default touch behavior for better performance
      preventDefault: isMobile ? false : true,
      // Reduce wheel multiplier on mobile
      wheelMultiplier: isMobile ? 0.8 : 1,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isMobile]);

  return null;
}

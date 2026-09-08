import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with v1.3.x API
    const lenis = new Lenis({
      lerp: 0.1,              // Interpolation factor — controls smoothness (0-1)
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis via GSAP's ticker for perfect sync with GSAP animations
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  /**
   * Scroll to a section or element with smooth animation.
   * @param {string|HTMLElement} target — CSS selector, hash, or DOM element
   * @param {object} options — Lenis scrollTo options override
   */
  const scrollTo = useCallback((target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -70,
        lerp: 0.08,
        duration: 1.4,
        ...options,
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  /**
   * Scroll to the top of the page.
   * @param {boolean} immediate — true = instant (for subpage navigation), false = animated
   */
  const scrollToTop = useCallback((immediate = true) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate });
    } else {
      window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
    }
  }, []);

  return { scrollTo, scrollToTop };
}

import { useEffect, useRef, useCallback } from 'react';

export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    let lenis = null;
    let updateTicker = null;
    let gsapInstance = null;

    // Initialize Lenis deferred so it does not block first paint
    const initTimer = setTimeout(async () => {
      if (isCancelled) return;

      try {
        const [LenisModule, gsapModule, ScrollTriggerModule] = await Promise.all([
          import('lenis'),
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);

        if (isCancelled) return;

        const isMobile = typeof window !== 'undefined' && (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches);
        if (isMobile) return;

        const Lenis = LenisModule.default || LenisModule;
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

        gsap.registerPlugin(ScrollTrigger);
        gsapInstance = gsap;

        lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
          infinite: false,
        });

        lenisRef.current = lenis;
        lenis.on('scroll', ScrollTrigger.update);

        updateTicker = (time) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0);

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize, { passive: true });
      } catch (_) {}
    }, 60);

    return () => {
      isCancelled = true;
      clearTimeout(initTimer);
      if (updateTicker && gsapInstance) {
        gsapInstance.ticker.remove(updateTicker);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  /**
   * Scroll to a section or element with smooth animation.
   */
  const scrollTo = useCallback((target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -70,
        lerp: 0.08,
        duration: 1.2,
        ...options,
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  /**
   * Scroll to the top of the page.
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

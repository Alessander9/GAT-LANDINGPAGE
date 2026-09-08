import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './StaggeredMenu.css';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#087F9F', '#09A8B5'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.webp',
  menuButtonColor = '#FFFFFF',
  openMenuButtonColor = '#FFFFFF',
  accentColor = '#09A8B5',
  changeMenuColorOnOpen = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  onCtaClick,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menú', 'Cerrar']);
  const [isScrolled, setIsScrolled] = useState(false);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, opacity: 1 });
      }
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-itemNum'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
    const ctaEl = panel.querySelector('.sm-panel-cta');

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map(el => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { opacity: 0, x: 12 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
    if (ctaEl) gsap.set(ctaEl, { y: 18, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', opacity: 0.7, x: 0, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    const socialsStart = panelInsertTime + panelDuration * 0.4;
    if (socialTitle) {
      tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
    }
    if (socialLinks.length) {
      tl.to(
        socialLinks,
        {
          y: 0, opacity: 1, duration: 0.55, ease: 'power3.out',
          stagger: { each: 0.08, from: 'start' },
          onComplete: () => gsap.set(socialLinks, { clearProps: 'opacity' }),
        },
        socialsStart + 0.04
      );
    }
    if (ctaEl) {
      tl.to(ctaEl, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, socialsStart + 0.12);
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();
    closeTweenRef.current?.kill();

    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    const layers = preContainer
      ? Array.from(preContainer.querySelectorAll('.sm-prelayer'))
      : preLayerElsRef.current;
    
    if (!panel) return;
    const allElements = [...layers, panel];
    
    // Kill any remaining tweens on all layers immediately
    gsap.killTweensOf(allElements);

    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(allElements, {
      xPercent: offscreen,
      duration: 0.35,
      ease: 'power3.inOut',
      overwrite: 'all',
      onComplete: () => {
        gsap.set(allElements, { xPercent: offscreen });
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-itemNum'));
        if (numberEls.length) gsap.set(numberEls, { opacity: 0, x: 12 });
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        const ctaEl = panel.querySelector('.sm-panel-cta');
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        if (ctaEl) gsap.set(ctaEl, { y: 18, opacity: 0 });
        busyRef.current = false;
      },
    });
  }, [position]);

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, []);

  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current;
    if (!btn) return;
    colorTweenRef.current?.kill();
    if (changeMenuColorOnOpen) {
      colorTweenRef.current = gsap.to(btn, {
        color: opening ? openMenuButtonColor : menuButtonColor,
        delay: 0.18, duration: 0.3, ease: 'power2.out',
      });
    } else {
      gsap.set(btn, { color: menuButtonColor });
    }
  }, [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]);

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      const targetColor = (changeMenuColorOnOpen && openRef.current) ? openMenuButtonColor : menuButtonColor;
      gsap.set(toggleBtnRef.current, { color: targetColor });
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();
    const currentLabel = opening ? 'Menú' : 'Cerrar';
    const targetLabel = opening ? 'Cerrar' : 'Menú';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menú' ? 'Cerrar' : 'Menú';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift, duration: 0.5 + lineCount * 0.07, ease: 'power4.out',
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    busyRef.current = false;
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      busyRef.current = false;
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;
    const handleClickOutside = event => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnClickAway, open, closeMenu]);

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper'}
      style={accentColor ? { '--sm-accent': accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      {/* Fullscreen Blur Backdrop Overlay */}
      <div
        className="sm-backdrop-blur"
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Stagger Prelayers */}
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#071521', '#09A8B5'];
          let arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />);
        })()}
      </div>

      {/* Header: Logo + Toggle */}
      <header className="staggered-menu-header" aria-label="Navegación principal">
        <a
          className={`sm-logo ${isScrolled && !open ? 'sm-logo-hidden' : ''}`}
          href="#hero"
          onClick={e => {
            e.preventDefault();
            closeMenu();
            setTimeout(() => {
              window.location.hash = '#hero';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, open ? 400 : 0);
          }}
          aria-label="GAT Technology Consulting — Ir al inicio"
        >
          <img
            src={logoUrl}
            alt="GAT Technology Consulting"
            className="sm-logo-img"
            draggable={false}
            width={76}
            height={76}
            style={{ aspectRatio: "1 / 1" }}
          />
        </a>

        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>{l}</span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line" />
          </span>
        </button>
      </header>

      {/* Slide Panel */}
      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
        inert={!open ? "" : undefined}
      >
        <div className="sm-panel-inner">
          {/* Main Nav Items */}
          <ul className="sm-panel-list" role="list">
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                    tabIndex={open ? 0 : -1}
                    onClick={e => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        if (it.onNavigate) {
                          it.onNavigate(it.link);
                        } else {
                          window.location.hash = it.link;
                        }
                      }, 380);
                    }}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                    {displayItemNumbering && (
                      <span className="sm-panel-itemNum">0{idx + 1}</span>
                    )}
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">Sin items</span>
                </span>
              </li>
            )}
          </ul>

          {/* CTA Button */}
          {onCtaClick && (
            <div className="sm-panel-cta">
              <button
                type="button"
                className="sm-panel-cta-btn"
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  closeMenu();
                  setTimeout(onCtaClick, 380);
                }}
              >
                Solicitar Diagnóstico Gratis
                <ArrowUpRight size={16} />
              </button>
            </div>
          )}

          {/* Socials */}
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Redes sociales">
              <h3 className="sm-socials-title">Síguenos</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                      tabIndex={open ? 0 : -1}
                      aria-label={`Seguir en ${s.label}`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;

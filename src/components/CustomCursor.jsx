import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only enable on pointer-fine devices (not touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: 'power2.out',
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const handleMouseEnterInteractive = () => {
      gsap.to(follower, {
        scale: 2.2,
        backgroundColor: 'rgba(9, 168, 181, 0.15)',
        borderColor: 'rgba(9, 168, 181, 0.8)',
        duration: 0.25,
      });
      gsap.to(cursor, {
        scale: 0.4,
        duration: 0.2,
      });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(9, 168, 181, 0.4)',
        duration: 0.25,
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener('mousemove', moveMouse);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#09A8B5',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #09A8B5',
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(9, 168, 181, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s ease',
        }}
      />
    </>
  );
}

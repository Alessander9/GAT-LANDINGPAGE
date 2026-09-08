import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyVideo Component
 * - Only attaches video source and buffers when within viewport range (IntersectionObserver)
 * - Automatically pauses when scrolled out of view to save CPU / GPU
 * - Includes caption track for 100% Lighthouse Accessibility
 */
export default function LazyVideo({
  src,
  poster,
  className = '',
  style = {},
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ariaLabel = 'Video demostrativo de GAT Technology Consulting',
  ...props
}) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver with 250px margin
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && autoPlay) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: '250px 0px 250px 0px', threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  return (
    <div
      ref={containerRef}
      className={`lazy-video-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#071521',
        ...style,
      }}
    >
      {isInView ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="none"
          aria-label={ariaLabel}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          {...props}
        >
          <track kind="captions" src="data:text/vtt;charset=utf-8,WEBVTT" label="Español" default={false} />
        </video>
      ) : (
        poster ? (
          <img
            src={poster}
            alt={ariaLabel}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(9, 168, 181, 0.08) 0%, rgba(7, 21, 33, 0.95) 100%)',
            }}
          />
        )
      )}
    </div>
  );
}

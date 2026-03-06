import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Lenis Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Custom Cursor Logic
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const cursorText = cursorTextRef.current;

    if (cursorDot && cursorOutline && cursorText) {
      let mouseX = 0;
      let mouseY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Direct update for dot to avoid lag
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        
        // GSAP for outline smooth follow
        gsap.to(cursorOutline, {
          x: mouseX,
          y: mouseY,
          duration: 0.15,
          ease: "power2.out"
        });

        // Update CSS variables for spotlight cards
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = mouseX - rect.left;
          const y = mouseY - rect.top;
          (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        });
      };

      window.addEventListener('mousemove', onMouseMove);

      // Hover effects
      const addHoverListeners = () => {
        const hoverables = document.querySelectorAll('a, button, .spotlight-card, input, select, textarea');
        
        hoverables.forEach(el => {
          el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, {
              width: 80,
              height: 80,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "transparent",
              duration: 0.3
            });
            gsap.to(cursorDot, { opacity: 0, duration: 0.2 });
          });

          el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, {
              width: 40,
              height: 40,
              backgroundColor: "transparent",
              borderColor: "rgba(255, 255, 255, 0.15)",
              duration: 0.3
            });
            gsap.to(cursorDot, { opacity: 1, duration: 0.2 });
          });
        });
      };

      // Re-run listeners periodically or on mutation (simplified here)
      setTimeout(addHoverListeners, 1000); 

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        lenis.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="ambient-light">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="cursor-dot hidden md:block" ref={cursorDotRef}></div>
      <div className="cursor-outline hidden md:flex" ref={cursorOutlineRef}>
        <span className="cursor-text" ref={cursorTextRef}></span>
      </div>

      <div className="noise"></div>

      <main className="relative z-10">
        {children}
      </main>
    </>
  );
};

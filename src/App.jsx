import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import WhatIDo        from './components/WhatIDo';
import Work           from './components/Work';
import BCICase        from './components/BCICase';
import Travel         from './components/Travel';
import Writing        from './components/Writing';
import About          from './components/About';
import Contact        from './components/Contact';
import SplashScreen   from './components/SplashScreen';
import ScrollProgress from './components/ScrollProgress';
import Currently      from './components/Currently';
import Certifications from './components/Certifications';
import Testimonials   from './components/Testimonials';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let raf;
    let rx = 0, ry = 0; // ring position (lerped)
    let mx = 0, my = 0; // actual mouse

    const move = e => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top  = my + 'px';
      }
      // magnetic snap to nearest interactive element
      const el = document.elementFromPoint(mx, my)?.closest('a,button');
      if (el && dotRef.current && ringRef.current) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        dotRef.current.style.transform  = `translate(-50%,-50%) scale(2.5)`;
        ringRef.current.style.width     = (r.width  + 16) + 'px';
        ringRef.current.style.height    = (r.height + 16) + 'px';
        ringRef.current.style.borderRadius = '6px';
        ringRef.current.style.left = cx + 'px';
        ringRef.current.style.top  = cy + 'px';
      } else {
        if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)';
        if (ringRef.current) { ringRef.current.style.width = '32px'; ringRef.current.style.height = '32px'; ringRef.current.style.borderRadius = '50%'; }
      }
    };

    const lerp = () => {
      const el = document.elementFromPoint(mx, my)?.closest('a,button');
      if (!el && ringRef.current) {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top  = ry + 'px';
      }
      raf = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(lerp);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background:'#0D0D0D' }}>
      {/* Scroll progress */}
      <ScrollProgress />

      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor-dot  hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />

      <AnimatePresence>
        {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration:0.9 }}
      >
        <Navbar />
        <Hero />
        <WhatIDo />
        <Currently />
        <Work />
        <BCICase />
        <Certifications />
        <Testimonials />
        <Travel />
        <Writing />
        <About />
        <Contact />

        <footer className="py-10 px-6 lg:px-20 border-t" style={{ borderColor:'var(--border)' }}>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-serif italic text-ink2 text-sm">Atharva Kanchan</span>
            <p className="font-mono text-muted text-xs tracking-widest">© {new Date().getFullYear()} · Built with React & ♥</p>
            <div className="flex gap-6">
              {[
                { l:'GitHub',    h:'https://github.com/atharvakanchan25' },
                { l:'LinkedIn',  h:'https://www.linkedin.com/in/atharva-kanchan-797643271/' },
                { l:'Medium',    h:'https://medium.com/@atharvakanchan959/about' },
                { l:'Spotify',   h:'https://open.spotify.com/user/31p64yhvoc35knos7ufcxqre6e7u?si=2205d2edd11247e9' },
                { l:'Quora',     h:'https://www.quora.com/profile/Atharva-Kanchan' },
                { l:'Pinterest', h:'https://in.pinterest.com/atharva_kanchan/' },
              ].map(x => (
                <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-accent transition-colors duration-200 font-mono tracking-wide">
                  {x.l}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

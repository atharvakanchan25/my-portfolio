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
    const move = e => {
      if (dotRef.current)  { dotRef.current.style.left  = e.clientX+'px'; dotRef.current.style.top  = e.clientY+'px'; }
      if (ringRef.current) { ringRef.current.style.left = e.clientX+'px'; ringRef.current.style.top = e.clientY+'px'; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background:'#0D0D0D' }}>
      {/* Scroll progress */}
      <ScrollProgress />

      {/* Custom cursor */}}
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
            <p className="font-mono text-muted text-xs tracking-widest">© {new Date().getFullYear()} — All rights reserved</p>
            <div className="flex gap-6">
              {[
                { l:'GitHub',    h:'https://github.com/atharvakanchan25' },
                { l:'LinkedIn',  h:'https://www.linkedin.com/in/atharva-kanchan-797643271/' },
                { l:'Medium',    h:'https://medium.com/@atharvakanchan959/about' },
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

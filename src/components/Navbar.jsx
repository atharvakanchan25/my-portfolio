import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { label:'Work',     id:'work' },
  { label:'Writing',  id:'writing' },
  { label:'Travel',   id:'travel' },
  { label:'About',    id:'about' },
  { label:'Contact',  id:'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Active section detection
      const offsets = LINKS.map(l => {
        const el = document.getElementById(l.id);
        return el ? { id: l.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      const current = offsets.filter(o => o.top <= 100).pop();
      setActive(current ? current.id : '');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y:-50, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,239,236,0.07)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="font-serif italic font-medium text-lg tracking-wide text-ink hover:text-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
        >
          Atharva K.
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={e => go(e, l.id)}
              className={`font-sans text-sm transition-colors duration-200 relative group ${
                active === l.id ? 'text-accent' : 'text-ink2 hover:text-accent'
              }`}>
              {l.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                active === l.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <a href="mailto:atharvakanchan959@gmail.com" className="btn-p text-xs py-2.5 px-5">
            Say Hello
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(p=>!p)} className="md:hidden p-2 flex flex-col gap-1.5" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open?'rotate-45 translate-y-2':''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open?'opacity-0':''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open?'-rotate-45 -translate-y-2':''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}
            className="md:hidden px-6 pb-6"
            style={{ background:'rgba(13,13,13,0.97)', borderBottom:'1px solid var(--border)' }}
          >
            {LINKS.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={e => go(e, l.id)}
                className="block py-3 text-sm text-ink2 border-b last:border-0 hover:text-accent transition-colors"
                style={{ borderColor:'var(--border)' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Mini SVG animations per identity ── */

const CodeAnim = () => {
  const lines = [
    { y: 60,  w: 120, delay: 0 },
    { y: 88,  w: 80,  delay: 0.1 },
    { y: 116, w: 140, delay: 0.2 },
    { y: 144, w: 60,  delay: 0.3 },
    { y: 172, w: 100, delay: 0.4 },
    { y: 200, w: 130, delay: 0.5 },
  ];
  return (
    <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="20" y="20" width="240" height="240" rx="6"
        fill="var(--paper)" stroke="var(--border)" strokeWidth="1" />
      <ellipse cx="140" cy="140" rx="110" ry="110" fill="url(#cg)" />
      {/* Bracket symbols */}
      <motion.text x="30" y="52" fontFamily="DM Mono" fontSize="13" fill="rgba(79,70,229,0.5)"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0 }}>{'{'}</motion.text>
      <motion.text x="248" y="248" fontFamily="DM Mono" fontSize="13" fill="rgba(79,70,229,0.5)"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.7, 0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>{'}'}</motion.text>
      {/* Code lines */}
      {lines.map((l, i) => (
        <motion.rect key={i} x="44" y={l.y} height="8" rx="2"
          fill="rgba(79,70,229,0.18)"
          initial={{ width: 0 }}
          animate={{ width: [0, l.w, l.w, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: l.delay + 0.6, ease: 'easeInOut' }}
        />
      ))}
      {/* Cursor blink */}
      <motion.rect x="44" y="228" width="8" height="12" rx="1"
        fill="#4F46E5"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* Flow dots */}
      {[0,1,2].map(i => (
        <motion.circle key={i} r="3" fill="#6B8E23" opacity="0.6"
          animate={{ cx: [44, 220, 44], cy: [60 + i*56, 60 + i*56, 60 + i*56] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}
    </svg>
  );
};

const TravelAnim = () => (
  <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
    <defs>
      <radialGradient id="tg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6B8E23" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#6B8E23" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="140" cy="140" rx="120" ry="120" fill="url(#tg)" />
    {/* Globe outline */}
    <motion.circle cx="140" cy="140" r="90" stroke="rgba(107,142,35,0.2)" strokeWidth="1"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }} />
    {/* Latitude lines */}
    {[-40, 0, 40].map((offset, i) => (
      <motion.ellipse key={i} cx="140" cy={140 + offset} rx={Math.sqrt(90*90 - offset*offset)} ry="14"
        stroke="rgba(107,142,35,0.15)" strokeWidth="1" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + i * 0.15 }} />
    ))}
    {/* Longitude line */}
    <motion.line x1="140" y1="50" x2="140" y2="230"
      stroke="rgba(107,142,35,0.15)" strokeWidth="1"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }} />
    {/* Plane path */}
    <motion.circle r="5" fill="#6B8E23" opacity="0.8"
      animate={{
        cx: [60, 100, 140, 190, 220, 190, 140, 100, 60],
        cy: [140, 100, 90, 100, 140, 180, 190, 180, 140],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Destination dots */}
    {[[80,110],[200,120],[150,180],[100,170]].map(([cx,cy],i) => (
      <motion.circle key={i} cx={cx} cy={cy} r="3" fill="#4F46E5" opacity="0.5"
        animate={{ r: [3, 5, 3], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
      />
    ))}
  </svg>
);

const ReadingAnim = () => {
  const words = [
    'consciousness', 'energy', 'identity', 'ritual',
    'curiosity', 'thought', 'meaning', 'silence',
  ];
  return (
    <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4A882" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C4A882" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="140" cy="140" rx="120" ry="120" fill="url(#rg)" />
      {/* Book shape */}
      <motion.rect x="60" y="70" width="160" height="140" rx="4"
        fill="var(--paper)" stroke="rgba(196,168,130,0.4)" strokeWidth="1"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }} />
      <line x1="140" y1="70" x2="140" y2="210" stroke="rgba(196,168,130,0.3)" strokeWidth="1" />
      {/* Text lines left page */}
      {[0,1,2,3,4].map(i => (
        <motion.rect key={i} x="72" y={92 + i*20} height="6" rx="2"
          fill="rgba(26,26,26,0.12)"
          initial={{ width: 0 }}
          animate={{ width: [0, 52, 52, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
      {/* Text lines right page */}
      {[0,1,2,3,4].map(i => (
        <motion.rect key={i} x="150" y={92 + i*20} height="6" rx="2"
          fill="rgba(26,26,26,0.12)"
          initial={{ width: 0 }}
          animate={{ width: [0, 52, 52, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 + 0.5, ease: 'easeInOut' }}
        />
      ))}
      {/* Floating words */}
      {words.map((w, i) => (
        <motion.text key={w}
          x={50 + (i % 4) * 50}
          y={30 + Math.floor(i / 4) * 220}
          fontFamily="Fraunces, serif" fontSize="8" fill="rgba(196,168,130,0.6)"
          fontStyle="italic"
          animate={{ opacity: [0, 0.8, 0], y: [30 + Math.floor(i/4)*220, 20 + Math.floor(i/4)*220, 10 + Math.floor(i/4)*220] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        >{w}</motion.text>
      ))}
    </svg>
  );
};

const WritingAnim = () => {
  const sentences = [
    'I write to understand,',
    'not to be understood.',
    'Every word is a question',
    'dressed as an answer.',
  ];
  return (
    <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="wg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="140" cy="140" rx="120" ry="120" fill="url(#wg)" />
      {/* Paper */}
      <motion.rect x="55" y="40" width="170" height="200" rx="3"
        fill="var(--paper)" stroke="var(--border)" strokeWidth="1"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} />
      {/* Ruled lines */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1="70" y1={80 + i*22} x2="210" y2={80 + i*22}
          stroke="rgba(26,26,26,0.05)" strokeWidth="1" />
      ))}
      {/* Typing sentences */}
      {sentences.map((s, i) => (
        <motion.text key={i} x="70" y={88 + i*22}
          fontFamily="Fraunces, serif" fontSize="9" fill="rgba(26,26,26,0.55)"
          fontStyle="italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 1.1, ease: 'easeInOut' }}
        >{s}</motion.text>
      ))}
      {/* Pen nib */}
      <motion.g
        animate={{ x: [0, 60, 120, 60, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="75" cy="220" rx="6" ry="3" fill="rgba(79,70,229,0.4)" />
        <line x1="75" y1="217" x2="75" y2="210" stroke="rgba(79,70,229,0.4)" strokeWidth="1.5" />
      </motion.g>
      {/* Ink dots trail */}
      {[0,1,2].map(i => (
        <motion.circle key={i} r="2" fill="rgba(79,70,229,0.25)"
          animate={{ cx: [75 + i*20, 75 + i*20], cy: [222, 215], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </svg>
  );
};

const PANELS = [
  {
    key: 'code',
    label: 'Building',
    sub: 'Agentic AI at Persistent Systems',
    color: '#4F46E5',
    Anim: CodeAnim,
  },
  {
    key: 'travel',
    label: 'Travelling',
    sub: 'Always planning the next escape',
    color: '#6B8E23',
    Anim: TravelAnim,
  },
  {
    key: 'reading',
    label: 'Reading',
    sub: 'The Pragmatic Programmer',
    color: '#C4A882',
    Anim: ReadingAnim,
  },
  {
    key: 'writing',
    label: 'Writing',
    sub: 'On Medium and in research',
    color: '#4F46E5',
    Anim: WritingAnim,
  },
];

const IdentityViz = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % PANELS.length), 3500);
    return () => clearInterval(t);
  }, []);

  const panel = PANELS[active];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-5">
      {/* Main animation frame */}
      <div className="relative" style={{ width: 260, height: 260 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={panel.key}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -12 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <panel.Anim />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={panel.key + 'label'}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <p className="font-mono text-xs mb-0.5" style={{ color: panel.color, letterSpacing: '0.12em' }}>
            {panel.label.toUpperCase()}
          </p>
          <p className="font-sans text-muted text-xs">{panel.sub}</p>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex gap-1.5">
        {PANELS.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 20 : 6,
              height: 6,
              background: active === i ? panel.color : 'var(--border)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.1 } } };
const item    = { hidden:{ opacity:0, y:28 }, visible:{ opacity:1, y:0, transition:{ duration:0.7, ease:[0.25,0.46,0.45,0.94] } } };
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-20 pt-16 overflow-hidden">
      {/* Subtle horizontal rule */}
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-30" style={{ background:'var(--border)' }} />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

        {/* ── Left ── */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-7 relative z-10">
          <motion.div variants={item}>
            <span className="label">Portfolio · 2025</span>
          </motion.div>

          <motion.h1 variants={item}
            className="font-serif font-light leading-[1.08] text-ink"
            style={{ fontSize:'clamp(3rem,6.5vw,5.5rem)' }}>
            Atharva<br />
            <em className="not-italic" style={{ color:'var(--accent)' }}>Kanchan</em>
          </motion.h1>

          <motion.p variants={item}
            className="font-serif italic font-light text-ink2 leading-relaxed"
            style={{ fontSize:'clamp(1.1rem,2vw,1.4rem)', maxWidth:480 }}>
            "I build, explore, and write — across code, cognition, and the world."
          </motion.p>

          <motion.p variants={item}
            className="font-sans text-muted leading-relaxed"
            style={{ fontSize:'0.95rem', maxWidth:420 }}>
            CSE student at MIT ADT University. BCI researcher, software developer,
            writer on Medium, and a traveller who finds clarity in motion.
          </motion.p>

          {/* Identity pills */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {['Coder','BCI Researcher','Writer','Traveller'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
            <a href="#work"
              onClick={e=>{ e.preventDefault(); document.getElementById('work')?.scrollIntoView({behavior:'smooth'}); }}
              className="btn-p">
              View Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-o">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
            <a href="#about"
              onClick={e=>{ e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'}); }}
              className="btn-o">
              Explore
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Identity viz ── */}
        <motion.div
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1, delay:0.5, ease:[0.25,0.46,0.45,0.94] }}
          className="hidden lg:flex items-center justify-center relative"
          style={{ height:420 }}
        >
          <IdentityViz />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-muted" style={{ fontSize:'0.6rem', letterSpacing:'0.2em' }}>SCROLL</span>
        <motion.div
          animate={{ y:[0,8,0] }}
          transition={{ duration:1.8, repeat:Infinity }}
          className="w-px h-10"
          style={{ background:'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}

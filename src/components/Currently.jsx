import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Building Card ── */
function BuildingCard() {
  const dots = [0, 1, 2, 3, 4];
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="flex items-center gap-5">
      {/* Icon circle */}
      <div className="shrink-0 flex items-center justify-center rounded-full" style={{ width: 44, height: 44, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs" style={{ color: '#6366F1', letterSpacing: '0.12em' }}>COMPILING</p>
          {/* Animated dots pipeline */}
          <div className="flex items-center gap-1">
            {dots.map(i => (
              <motion.span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
        <p className="font-serif italic font-light text-ink leading-snug" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
          Agentic AI pipelines — <span style={{ color: '#6366F1' }}>making machines think in steps.</span>
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
          Persistent Systems · LLMs · Agentic workflows
        </p>
      </div>
    </motion.div>
  );
}

/* ── Reading Card ── */
function ReadingCard() {
  const lines = [80, 60, 90, 50, 70, 40];
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="flex items-center gap-5">
      <div className="shrink-0 flex items-center justify-center rounded-full" style={{ width: 44, height: 44, background: 'rgba(196,168,130,0.12)', border: '1px solid rgba(196,168,130,0.3)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs" style={{ color: '#C4A882', letterSpacing: '0.12em' }}>NOW READING</p>
          {/* Animated text lines */}
          <div className="flex flex-col gap-[3px] justify-center" style={{ height: 16 }}>
            {lines.map((w, i) => (
              <motion.span key={i} style={{ height: 2, borderRadius: 2, background: '#C4A882', display: 'block' }}
                animate={{ width: [w * 0.3, w, w * 0.5, w] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
        <p className="font-serif italic font-light text-ink leading-snug" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
          The Pragmatic Programmer — <span style={{ color: '#C4A882' }}>every page rewires how I think.</span>
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
          Hunt & Thomas · software craft · late night chapters
        </p>
      </div>
    </motion.div>
  );
}

/* ── Spotify / Listening Card ── */
const BAR_HEIGHTS = [12, 20, 16, 24, 10, 18, 14];
function ListeningCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="flex items-center gap-5">
      <a href="https://open.spotify.com/user/31p64yhvoc35knos7ufcxqre6e7u?si=2205d2edd11247e9" target="_blank" rel="noopener noreferrer"
        className="shrink-0 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
        style={{ width: 44, height: 44, background: '#1DB954' }}>
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 01-1.032.25c-2.827-1.727-6.39-2.117-10.586-1.16a.75.75 0 01-.334-1.463c4.588-1.047 8.52-.596 11.7 1.341a.75.75 0 01.252 1.032zm1.47-3.27a.937.937 0 01-1.288.308c-3.234-1.988-8.163-2.563-11.986-1.403a.937.937 0 01-.543-1.794c4.37-1.326 9.8-.683 13.51 1.6a.937.937 0 01.307 1.289zm.127-3.408C15.37 8.39 9.386 8.2 5.895 9.28a1.124 1.124 0 01-.652-2.15c4.04-1.226 10.76-1 14.99 1.42a1.124 1.124 0 01-1.12 1.95v.01z"/>
        </svg>
      </a>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs" style={{ color: '#1DB954', letterSpacing: '0.12em' }}>NOW PLAYING</p>
          <div className="flex items-end gap-[3px]" style={{ height: 16 }}>
            {BAR_HEIGHTS.map((h, i) => (
              <motion.span key={i} style={{ width: 3, borderRadius: 2, background: '#1DB954', display: 'block' }}
                animate={{ height: [h * 0.4, h, h * 0.6, h * 0.9, h * 0.4] }}
                transition={{ duration: 0.9 + i * 0.15, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
        <p className="font-serif italic font-light text-ink leading-snug" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
          Lofi Hip Hop — <span style={{ color: '#1DB954' }}>the soundtrack of deep work.</span>
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
          focus playlists · chill beats · late nights
        </p>
      </div>
    </motion.div>
  );
}

/* ── Exploring Card ── */
function ExploringCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="flex items-center gap-5">
      <div className="shrink-0 flex items-center justify-center rounded-full" style={{ width: 44, height: 44, background: 'rgba(107,142,35,0.12)', border: '1px solid rgba(107,142,35,0.3)' }}>
        {/* Animated pulsing pin */}
        <motion.svg viewBox="0 0 24 24" fill="none" width="20" height="20"
          animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(107,142,35,0.3)" stroke="#7FAF2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" fill="#7FAF2A" />
        </motion.svg>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs" style={{ color: '#7FAF2A', letterSpacing: '0.12em' }}>NEXT DESTINATION</p>
          {/* Animated radar rings */}
          <div className="relative flex items-center justify-center" style={{ width: 16, height: 16 }}>
            {[0, 1, 2].map(i => (
              <motion.span key={i} style={{ position: 'absolute', borderRadius: '50%', border: '1px solid #7FAF2A', display: 'block' }}
                animate={{ width: [4, 16], height: [4, 16], opacity: [0.8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }}
              />
            ))}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#7FAF2A', display: 'block' }} />
          </div>
        </div>
        <p className="font-serif italic font-light text-ink leading-snug" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
          Destination unknown — <span style={{ color: '#7FAF2A' }}>the best trips start with no plan.</span>
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
          wanderlust · solo travel · secret itinerary
        </p>
      </div>
    </motion.div>
  );
}

const CARDS = { building: BuildingCard, reading: ReadingCard, listening: ListeningCard, exploring: ExploringCard };

const ITEMS = [
  {
    key: 'building',
    icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>),
    label: 'Building',
  },
  {
    key: 'reading',
    icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
    label: 'Reading',
  },
  {
    key: 'listening',
    icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>),
    label: 'Listening',
  },
  {
    key: 'exploring',
    icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>),
    label: 'Exploring',
  },
];

export default function Currently() {
  const [active, setActive] = useState(0);
  const ActiveCard = CARDS[ITEMS[active].key];

  return (
    <section className="py-16 px-6 lg:px-20" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="rule mb-12" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 lg:gap-16">
          <div className="shrink-0">
            <span className="label">Status</span>
            <p className="font-serif font-light text-ink mt-2" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>
              Currently
            </p>
          </div>

          <div className="flex-1">
            {/* Tab row */}
            <div className="flex gap-1 mb-5 flex-wrap">
              {ITEMS.map((item, i) => (
                <button key={item.key} onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm font-sans text-xs font-medium transition-all duration-200 ${
                    active === i
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-muted border border-transparent hover:text-ink hover:border-[var(--border)]'
                  }`}>
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Animated card */}
            <AnimatePresence mode="wait">
              <ActiveCard key={ITEMS[active].key} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

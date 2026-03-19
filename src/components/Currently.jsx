import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS = [
  {
    key: 'building',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'Building',
    value: 'Agentic AI pipelines at Persistent Systems',
  },
  {
    key: 'reading',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Reading',
    value: 'The Pragmatic Programmer by Hunt and Thomas',
  },
  {
    key: 'listening',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    label: 'Listening',
    value: 'Lofi Hip Hop focus playlists',
  },
  {
    key: 'exploring',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: 'Exploring',
    value: 'Planning the next trip. Destination still a secret.',
  },
];

export default function Currently() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 px-6 lg:px-20" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="rule mb-12" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 lg:gap-16">
          <div className="shrink-0">
            <span className="label">Status</span>
            <p className="font-serif font-light text-ink mt-2"
              style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>
              Currently
            </p>
          </div>

          <div className="flex-1">
            {/* Tab row */}
            <div className="flex gap-1 mb-5 flex-wrap">
              {ITEMS.map((item, i) => (
                <button
                  key={item.key}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm font-sans text-xs font-medium transition-all duration-200 ${
                    active === i
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-muted border border-transparent hover:text-ink hover:border-[var(--border)]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Value */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-serif italic font-light text-ink2 leading-relaxed"
                style={{ fontSize: 'clamp(1rem,1.8vw,1.25rem)' }}
              >
                "{ITEMS[active].value}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

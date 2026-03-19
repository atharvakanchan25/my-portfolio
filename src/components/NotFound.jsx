import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center max-w-lg"
      >
        {/* Big 404 */}
        <p className="font-serif font-light select-none"
          style={{
            fontSize: 'clamp(6rem,18vw,12rem)',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(79,70,229,0.25)',
            letterSpacing: '-0.04em',
          }}>
          404
        </p>

        <div className="rule my-8" />

        <h1 className="font-serif font-light text-ink mb-4"
          style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
          This page got lost in transit.
        </h1>
        <p className="font-sans text-muted text-sm leading-relaxed mb-10">
          Maybe it's somewhere between Pune and Ladakh. Let's get you back home.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-p inline-flex"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </motion.a>

        {/* Floating label */}
        <motion.p
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-muted mt-16"
          style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
        >
          ATHARVA KANCHAN · PORTFOLIO
        </motion.p>
      </motion.div>
    </div>
  );
}

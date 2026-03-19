import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onDone }) => {
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 2600);
    const t2 = setTimeout(onDone, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  const strokes = [
    { d:'M 60 160 L 120 40',  delay:0    },
    { d:'M 120 40 L 180 160', delay:0.08 },
    { d:'M 78 110 L 162 110', delay:0.18 },
    { d:'M 220 40 L 220 160', delay:0.1  },
    { d:'M 220 100 L 290 40', delay:0.2  },
    { d:'M 220 100 L 290 160',delay:0.28 },
  ];

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="splash"
          initial={{ opacity:1 }}
          animate={{ opacity: phase === 'out' ? 0 : 1 }}
          transition={{ duration:0.8, ease:'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background:'#F8F7F4' }}
        >
          {/* Subtle paper texture lines */}
          {[...Array(8)].map((_,i) => (
            <div key={i} className="absolute w-full"
              style={{ top:`${12.5*(i+1)}%`, height:1, background:'rgba(26,26,26,0.04)' }} />
          ))}

          {/* AK monogram */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.6, ease:[0.25,0.46,0.45,0.94] }}
          >
            <svg width="360" height="200" viewBox="40 20 280 160" fill="none">
              {strokes.map((s,i) => (
                <motion.path
                  key={i}
                  d={s.d}
                  stroke="#1A1A1A"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength:0, opacity:0 }}
                  animate={{ pathLength:1, opacity:1 }}
                  transition={{ duration:0.5, delay:s.delay, ease:'easeOut' }}
                />
              ))}
              {/* Accent dot */}
              <motion.circle cx="120" cy="40" r="5" fill="#4F46E5"
                initial={{ scale:0, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                transition={{ delay:0.5, duration:0.3 }}
              />
            </svg>
          </motion.div>

          {/* Name */}
          <motion.p
            className="font-serif italic text-ink2 tracking-widest mt-2"
            style={{ fontSize:'0.85rem', letterSpacing:'0.3em' }}
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.6, duration:0.6 }}
          >
            ATHARVA KANCHAN
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="font-mono text-muted mt-3"
            style={{ fontSize:'0.65rem', letterSpacing:'0.2em' }}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1, duration:0.5 }}
          >
            CODER · RESEARCHER · WRITER · TRAVELLER
          </motion.p>

          {/* Progress line */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{ width:120, height:1, background:'rgba(26,26,26,0.1)' }}>
            <motion.div style={{ height:'100%', background:'#4F46E5' }}
              initial={{ width:'0%' }}
              animate={{ width:'100%' }}
              transition={{ duration:2.4, ease:'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

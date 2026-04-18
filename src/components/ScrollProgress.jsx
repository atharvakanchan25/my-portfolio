import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const spring = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      spring.set(pct);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [spring]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] h-[2px] origin-left"
      style={{
        scaleX: spring,
        background: 'linear-gradient(to right, var(--accent), var(--accent2))',
        width: '100%',
      }}
    />
  );
}

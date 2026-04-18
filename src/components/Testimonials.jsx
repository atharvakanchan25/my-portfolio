import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote:
      'Atharva demonstrated exceptional initiative during his internship. His work on Agentic AI pipelines showed a rare combination of deep technical understanding and clear communication — he could explain complex systems to both engineers and stakeholders.',
    name: 'Mentor, Persistent Systems',
    role: 'Senior Engineer · Agentic AI Division',
    initials: 'PS',
  },
  {
    quote:
      'Working with Atharva on the BCI project was a pleasure. He brought genuine curiosity to every problem and consistently pushed the research forward with creative approaches to EEG signal processing.',
    name: 'Supervisor, IS360',
    role: 'Research Lead · Brain-Computer Interfaces',
    initials: 'IS',
  },
  {
    quote:
      'Atharva\'s writing on Medium stands out for its clarity and depth. He has a gift for making complex AI concepts accessible without dumbing them down — a skill that\'s genuinely rare in the field.',
    name: 'Reader & Peer Reviewer',
    role: 'AI Researcher',
    initials: 'AR',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 lg:px-20" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="rule mb-16" />

        <div className="text-center mb-12">
          <span className="label justify-center">Kind Words</span>
          <h2 className="font-serif font-light text-ink mt-3"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
            What people say
          </h2>
        </div>

        <div className="relative" style={{ minHeight: 220 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              {/* Quote mark */}
              <div className="font-serif text-accent opacity-30 mb-4 leading-none select-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}>
                "
              </div>
              <p className="font-serif italic font-light text-ink2 leading-relaxed mx-auto mb-8"
                style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', maxWidth: 640 }}>
                {TESTIMONIALS[active].quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-medium text-accent"
                  style={{ background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)' }}>
                  {TESTIMONIALS[active].initials}
                </div>
                <div className="text-left">
                  <p className="font-sans font-medium text-ink text-sm">{TESTIMONIALS[active].name}</p>
                  <p className="font-mono text-muted" style={{ fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                    {TESTIMONIALS[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                background: active === i ? 'var(--accent)' : 'var(--border)',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

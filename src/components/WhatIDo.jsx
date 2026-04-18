import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Code',
    sub: 'Software & AI Systems',
    philosophy: 'Elegant solutions to complex problems — from ML pipelines to production systems.',
    color: '#4F46E5',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Research',
    sub: 'Papers & Deep Thinking',
    philosophy: 'I love writing research papers — turning messy observations into structured knowledge.',
    color: '#6B8E23',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
      </svg>
    ),
    title: 'Writing',
    sub: 'Ideas & Reflections',
    philosophy: 'Writing is thinking made visible — I write to understand, not just to explain.',
    color: '#C4A882',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Travel',
    sub: 'Exploration & Perspective',
    philosophy: 'Every place rewires how I think — travel is the best debugging tool I know.',
    color: '#4F46E5',
  },
];

export default function WhatIDo() {
  return (
    <section className="py-28 px-6 lg:px-20" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14"
        >
          <span className="label">What I Do</span>
          <h2 className="font-serif font-light text-ink mt-3"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
            A multidisciplinary <em>universe</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.1 }}
              whileHover={{ y:-4 }}
              className="card p-7 group cursor-default"
            >
              <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-sm transition-colors duration-300"
                style={{ color: p.color, background:`${p.color}12`, border:`1px solid ${p.color}22` }}>
                {p.icon}
              </div>
              <p className="font-mono text-muted mb-1" style={{ fontSize:'0.65rem', letterSpacing:'0.15em' }}>
                {p.sub}
              </p>
              <h3 className="font-serif font-medium text-ink text-xl mb-3">{p.title}</h3>
              <p className="font-sans text-muted text-sm leading-relaxed">{p.philosophy}</p>

              {/* Accent line on hover */}
              <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: p.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

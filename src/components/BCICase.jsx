import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    org: 'Persistent Systems Limited',
    role: 'Software Engineering Intern',
    period: 'Nov 2025 – Apr 2026',
    color: '#4F46E5',
    highlight: true,
    desc: 'Worked on Agentic AI — building autonomous systems that plan, reason, and execute multi-step tasks without human intervention. Contributed to LLM-based agent pipelines, tool-use frameworks, and evaluation harnesses for production-grade agentic workflows.',
    tags: ['Agentic AI', 'LLMs', 'Python', 'Tool Use', 'Automation'],
    points: [
      'Designed and implemented multi-step agent pipelines using LLM reasoning loops',
      'Built tool-use integrations enabling agents to call APIs, query databases, and execute code',
      'Developed evaluation frameworks to measure agent reliability and task completion rates',
      'Collaborated with senior engineers on production deployment of agentic workflows',
    ],
  },
  {
    org: 'IS360 Private Ltd',
    role: 'BCI Research Intern',
    period: 'Jan 2024 – Jun 2024',
    color: '#6B8E23',
    highlight: false,
    desc: 'Explored Brain-Computer Interface research during a 6-month stint. Worked on EEG signal processing, feature extraction, and ML-based mental state classification.',
    tags: ['BCI', 'EEG', 'Signal Processing', 'ML'],
    points: [],
  },
];

export default function BCICase() {
  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14"
        >
          <span className="label">Experience</span>
          <h2 className="font-serif font-light text-ink mt-3"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
            Where I've worked{' '}
            <em className="font-serif italic font-light" style={{ color:'var(--accent2)' }}>
              and what I built
            </em>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.55, delay:i*0.1 }}
              className="card p-8 group"
              style={exp.highlight ? { borderLeft:`3px solid ${exp.color}` } : {}}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif font-medium text-ink"
                      style={{ fontSize: exp.highlight ? '1.25rem' : '1.05rem' }}>
                      {exp.org}
                    </h3>
                    {exp.highlight && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm"
                        style={{ background:'rgba(79,70,229,0.08)', color:'var(--accent)', border:'1px solid rgba(79,70,229,0.15)' }}>
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-muted" style={{ fontSize:'0.68rem', letterSpacing:'0.12em' }}>
                    {exp.role} · {exp.period}
                  </p>
                </div>
              </div>

              <p className="font-sans text-ink2 text-sm leading-relaxed mb-5">{exp.desc}</p>

              {exp.points.length > 0 && (
                <ul className="space-y-2 mb-5">
                  {exp.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-3 font-sans text-muted text-sm leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background:'var(--accent)' }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research papers callout */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.55, delay:0.2 }}
          className="mt-5 card p-8"
          style={{ borderLeft:'3px solid var(--accent2)' }}
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
              style={{ background:'rgba(107,142,35,0.08)', border:'1px solid rgba(107,142,35,0.2)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color:'var(--accent2)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div>
              <p className="font-mono text-muted mb-1" style={{ fontSize:'0.65rem', letterSpacing:'0.15em' }}>
                RESEARCH INTEREST
              </p>
              <h3 className="font-serif font-medium text-ink text-lg mb-2">Writing Research Papers</h3>
              <p className="font-sans text-muted text-sm leading-relaxed max-w-2xl">
                I love the process of writing research papers — the discipline of turning messy observations
                into structured, reproducible knowledge. Interested in publishing work at the intersection
                of deep learning, medical imaging, and cognitive systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { num:'01', label:'Research',  desc:'Deep-dive into the problem space, data, and domain.',       icon:'🔍' },
  { num:'02', label:'Concept',   desc:'Architect the solution, choose models, define metrics.',    icon:'💡' },
  { num:'03', label:'Build',     desc:'Implement, experiment, iterate with rigorous testing.',     icon:'⚙️' },
  { num:'04', label:'Refine',    desc:'Optimize performance, tune hyperparameters, validate.',     icon:'📊' },
  { num:'05', label:'Deliver',   desc:'Deploy, document, and communicate results clearly.',        icon:'🚀' },
];

const Process = () => (
  <section className="py-32 px-6 lg:px-16" style={{ background:'#0E0E0E' }}>
    <div className="max-w-7xl mx-auto">
      <div className="divider mb-20" />

      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6 }}
        className="mb-16"
      >
        <span className="section-label">How I Work</span>
        <h2 className="font-display font-bold text-white"
          style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
          My Process
        </h2>
      </motion.div>

      {/* Desktop: horizontal */}
      <div className="hidden lg:grid grid-cols-5 gap-0 relative">
        {/* Connecting line */}
        <div className="absolute top-8 left-[10%] right-[10%] h-px"
          style={{ background:'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)' }} />

        {STEPS.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            {/* Icon circle */}
            <motion.div
              whileHover={{ scale:1.1, borderColor:'rgba(59,130,246,0.5)' }}
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-300"
              style={{ background:'#111', border:'1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl">{s.icon}</span>
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
            </motion.div>

            <span className="font-display font-bold text-xs tracking-widest mb-2"
              style={{ color:'rgba(59,130,246,0.5)' }}>{s.num}</span>
            <h3 className="font-display font-semibold text-white text-sm mb-2">{s.label}</h3>
            <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="lg:hidden space-y-6">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity:0, x:-20 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay: i * 0.08 }}
            className="flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background:'#111', border:'1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-xl">{s.icon}</span>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest"
                style={{ color:'rgba(59,130,246,0.5)' }}>{s.num}</span>
              <h3 className="font-display font-semibold text-white text-sm mt-0.5 mb-1">{s.label}</h3>
              <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

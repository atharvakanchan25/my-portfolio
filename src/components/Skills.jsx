import React from 'react';
import { motion } from 'framer-motion';

const GROUPS = [
  {
    label: 'Programming',
    color: '#3B82F6',
    skills: ['Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'ML / Deep Learning',
    color: '#8B5CF6',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'U-Net'],
  },
  {
    label: 'Data & Analytics',
    color: '#22D3EE',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau'],
  },
  {
    label: 'Cloud & DevOps',
    color: '#3B82F6',
    skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
  },
];

const Skills = () => (
  <section id="skills" className="py-32 px-6 lg:px-16">
    <div className="max-w-5xl mx-auto">
      <div className="divider mb-20" />

      <motion.div
        initial={{ opacity:0, y:24 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label justify-center">Expertise</span>
        <h2 className="font-display font-bold text-white mt-2"
          style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
          Tools & Technologies
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-10">
        {GROUPS.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay: gi * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-4 rounded-full" style={{ background: g.color }} />
              <p className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: g.color, opacity:0.8 }}>{g.label}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s, si) => (
                <motion.span
                  key={s}
                  initial={{ opacity:0, scale:0.9 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }}
                  transition={{ delay: gi * 0.1 + si * 0.04 }}
                  whileHover={{ y:-3, borderColor: g.color, color: g.color }}
                  className="skill-chip"
                  style={{ transition:'all 0.2s ease' }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

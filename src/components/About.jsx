import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { g:'Languages',   items:['Python','Java','SQL','HTML/CSS'] },
  { g:'ML / DL',     items:['TensorFlow','PyTorch','Scikit-learn','OpenCV'] },
  { g:'Data',        items:['Pandas','NumPy','Power BI','Tableau'] },
  { g:'Cloud & Dev', items:['AWS','Docker','Git','Linux'] },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="rule mb-20" />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 lg:gap-24 items-start">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity:0, x:-24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
            className="space-y-10"
          >
            <div>
              <span className="label">About</span>
              <h2 className="font-serif font-light text-ink mt-3"
                style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
                The person behind<br />
                <em className="font-serif italic font-light" style={{ color:'var(--accent)' }}>the work</em>
              </h2>
            </div>

            <div className="space-y-5 font-sans text-ink2 leading-relaxed" style={{ fontSize:'0.95rem' }}>
              <p>
                I'm Atharva — a CSE student at MIT ADT University, Pune, specializing in AI & Analytics.
                But more than a student, I'm someone who is genuinely curious about how things work:
                brains, systems, cities, and stories.
              </p>
              <p>
                My work sits at the intersection of <span className="font-medium text-ink">technology and human experience</span>.
                Whether I'm building a deep learning pipeline for medical imaging, decoding EEG signals
                for a BCI system, or writing about what travel taught me about thinking — the thread
                is always the same: understanding deeply, then communicating clearly.
              </p>
              <p>
                I believe the best engineers are also good writers, the best researchers are also
                good listeners, and the best travellers are also good observers. I'm trying to be all three.
              </p>
            </div>

            {/* Quote */}
            <div className="pl-5" style={{ borderLeft:'2px solid var(--accent)' }}>
              <p className="font-serif italic font-light text-ink2 leading-relaxed"
                style={{ fontSize:'1.05rem' }}>
                "Curiosity is not a personality trait — it's a practice. I show up every day
                and ask one more question than I did yesterday."
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="label mb-6">Technical Skills</p>
              <div className="grid grid-cols-2 gap-6">
                {SKILLS.map(s => (
                  <div key={s.g}>
                    <p className="font-mono text-muted mb-3" style={{ fontSize:'0.65rem', letterSpacing:'0.15em' }}>
                      {s.g}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map(item => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity:0, x:24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, delay:0.15 }}
            className="relative"
          >
            {/* Shadow offset */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm"
              style={{ background:'rgba(79,70,229,0.08)', border:'1px solid rgba(79,70,229,0.12)' }} />

            <div className="relative rounded-sm overflow-hidden"
              style={{ border:'1px solid var(--border)' }}>
              <img
                src="https://pbs.twimg.com/profile_images/1789489136849543168/E57BSWLk_400x400.jpg"
                alt="Atharva Kanchan"
                className="w-full object-cover"
                style={{ aspectRatio:'3/4' }}
                loading="lazy"
              />
              <div className="absolute inset-0"
                style={{ background:'linear-gradient(to top, rgba(248,247,244,0.5) 0%, transparent 40%)' }} />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y:[0,-6,0] }}
              transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
              className="absolute -bottom-4 -left-4 card px-5 py-4"
            >
              <p className="font-mono text-muted" style={{ fontSize:'0.62rem', letterSpacing:'0.12em' }}>
                CURRENTLY AT
              </p>
              <p className="font-serif font-medium text-ink text-sm mt-0.5">MIT ADT University</p>
              <p className="font-mono text-muted mt-0.5" style={{ fontSize:'0.6rem' }}>
                CSE · AI & Analytics
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

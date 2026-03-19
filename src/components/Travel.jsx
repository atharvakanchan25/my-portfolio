import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const PLACES = [
  {
    place: 'Pune, Maharashtra',
    tag: 'Home Base',
    reflection: 'Where I learned that building things and understanding people are the same skill.',
    icon: '🏙️',
  },
  {
    place: 'Goa',
    tag: 'Coastal Reset',
    reflection: 'The ocean has a way of making every problem feel solvable — or irrelevant.',
    icon: '🌊',
  },
  {
    place: 'Himachal Pradesh',
    tag: 'Mountain Clarity',
    reflection: 'At altitude, complexity falls away. The best ideas come when you stop trying.',
    icon: '🏔️',
  },
  {
    place: 'Mumbai',
    tag: 'Energy & Chaos',
    reflection: 'A city that runs on ambition. Taught me that pace and purpose are different things.',
    icon: '🌆',
  },
  {
    place: 'Rajasthan',
    tag: 'History & Scale',
    reflection: 'Standing in centuries-old forts, I understood that all systems — even empires — are temporary.',
    icon: '🏯',
  },
  {
    place: 'Kerala',
    tag: 'Slow & Deep',
    reflection: 'Backwaters move slowly but reach everywhere. A metaphor I think about often.',
    icon: '🌿',
  },
];

export default function Travel() {
  const scrollRef = useRef(null);

  const scroll = dir => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior:'smooth' });
    }
  };

  return (
    <section id="travel" className="py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="label">Travel</span>
            <h2 className="font-serif font-light text-ink mt-3"
              style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Places that <em className="font-serif italic font-light" style={{ color:'var(--accent)' }}>rewired</em> me
            </h2>
            <p className="font-sans text-muted text-sm mt-3 max-w-md">
              Travel isn't about destinations — it's about the questions each place forces you to ask.
            </p>
          </div>
          {/* Scroll arrows */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="btn-o px-3 py-2.5" aria-label="Scroll left">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button onClick={() => scroll(1)} className="btn-o px-3 py-2.5" aria-label="Scroll right">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="h-scroll pb-4">
          {PLACES.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity:0, x:30 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.08 }}
              className="card flex-shrink-0 p-7 group"
              style={{ width:280 }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <p className="font-mono text-muted mb-1" style={{ fontSize:'0.62rem', letterSpacing:'0.15em' }}>
                {p.tag}
              </p>
              <h3 className="font-serif font-medium text-ink text-lg mb-3">{p.place}</h3>
              <p className="font-sans text-muted text-sm leading-relaxed italic">
                "{p.reflection}"
              </p>
              <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background:'var(--accent)' }} />
            </motion.div>
          ))}
        </div>

        {/* Pinterest link */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:0.3 }}
          className="mt-8"
        >
          <a href="https://in.pinterest.com/atharva_kanchan/" target="_blank" rel="noopener noreferrer"
            className="btn-o text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            View Travel Board on Pinterest
          </a>
        </motion.div>
      </div>
    </section>
  );
}

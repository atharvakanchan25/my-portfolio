import React from 'react';
import { motion } from 'framer-motion';

const ARTICLES = [
  {
    title: 'The Day I Understood Shiva and Parvati: Consciousness, Energy, and the Meaning of Love',
    excerpt: 'A few days ago I came across a post about consciousness and energy. At first it looked like another spiritual idea on the internet. But as I kept reading, something shifted.',
    tag: 'Philosophy · Spirituality',
    readTime: '5 min read',
    date: '5 days ago',
    href: 'https://medium.com/@atharvakanchan959/about',
  },
  {
    title: 'The Version of Me When No One Is Watching',
    excerpt: 'There comes a moment in life when you sit alone and start thinking about who you really are. Not your name. Not your age. Not what people think.',
    tag: 'Personal · Identity',
    readTime: '4 min read',
    date: 'Feb 25',
    href: 'https://medium.com/@atharvakanchan959/about',
  },
  {
    title: 'Between Ritual and Reality',
    excerpt: 'I am twenty one, but some days my mind feels older than the people around me. Not older in a wise, superior way. Older in a tired, searching way.',
    tag: 'Reflection · Life',
    readTime: '5 min read',
    date: 'Jan 24',
    href: 'https://medium.com/@atharvakanchan959/about',
  },
  {
    title: 'Why I Write: Reflections from the Edge of Thought',
    excerpt: 'I am a normal human, a 21-year-old born in 2004, with no special expertise in life except for the experiences I have lived and the questions I keep asking.',
    tag: 'Writing · Purpose',
    readTime: '4 min read',
    date: 'Jan 22',
    href: 'https://medium.com/@atharvakanchan959/about',
  },
  {
    title: 'Agentic AI: When Models Stop Answering and Start Acting',
    excerpt: 'During my internship at Persistent Systems, I worked on agentic AI systems that plan, reason, and execute multi-step tasks autonomously. Here is what I learned about the shift from reactive to proactive AI.',
    tag: 'AI · Research',
    readTime: '7 min read',
    date: '2025',
    href: 'https://medium.com/@atharvakanchan959/about',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-28 px-6 lg:px-20" style={{ background:'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="label">Writing</span>
            <h2 className="font-serif font-light text-ink mt-3"
              style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Ideas worth <em className="font-serif italic font-light" style={{ color:'var(--accent)' }}>sharing</em>
            </h2>
            {/* Platform links */}
            <div className="flex flex-wrap gap-3 mt-5">
              <a href="https://medium.com/@atharvakanchan959/about" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-muted hover:text-accent transition-colors duration-200"
                style={{ fontSize:'0.72rem', letterSpacing:'0.1em' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
              </a>
              <span className="text-muted" style={{ fontSize:'0.72rem' }}>/</span>
              <a href="https://www.quora.com/profile/Atharva-Kanchan" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-muted hover:text-accent transition-colors duration-200"
                style={{ fontSize:'0.72rem', letterSpacing:'0.1em' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 0C5.6 0 0 5.6 0 12.5S5.6 25 12.5 25 25 19.4 25 12.5 19.4 0 12.5 0zm3.3 18.7c-.7-1-1.4-1.9-2.3-2.6.4-.1.8-.2 1.2-.4l1.5 2.3 1.4-.9-1.5-2.3c.8-.8 1.3-1.9 1.3-3.3 0-2.8-1.8-4.8-4.9-4.8s-4.9 2-4.9 4.8 1.8 4.8 4.9 4.8c.4 0 .8 0 1.2-.1.7.6 1.3 1.3 1.8 2.1l1.3-.6z"/>
                </svg>
                Quora
              </a>
            </div>
          </div>
          <a href="https://medium.com/@atharvakanchan959/about" target="_blank" rel="noopener noreferrer"
            className="btn-o hidden md:inline-flex text-sm">
            All Articles →
          </a>
        </motion.div>

        {/* Featured article — large */}
        <motion.a
          href={ARTICLES[0].href}
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="writing-card card block p-10 mb-5 group"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="tag">{ARTICLES[0].tag}</span>
                <span className="font-mono text-muted" style={{ fontSize:'0.65rem' }}>{ARTICLES[0].readTime}</span>
                <span className="font-mono text-muted" style={{ fontSize:'0.65rem' }}>{ARTICLES[0].date}</span>
              </div>
              <h3 className="font-serif font-medium text-ink leading-snug mb-4 group-hover:text-accent transition-colors duration-300"
                style={{ fontSize:'clamp(1.2rem,2.5vw,1.6rem)' }}>
                {ARTICLES[0].title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed max-w-xl">
                {ARTICLES[0].excerpt}
              </p>
            </div>
            <div className="hidden md:flex items-center self-center">
              <svg className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </div>
          </div>
        </motion.a>

        {/* Remaining articles — list */}
        <div className="space-y-0">
          {ARTICLES.slice(1).map((a, i) => (
            <motion.a
              key={i}
              href={a.href}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.07 }}
              className="writing-card flex items-start justify-between gap-6 py-6 group"
              style={{ borderBottom:'1px solid var(--border)' }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="tag">{a.tag}</span>
                  <span className="font-mono text-muted" style={{ fontSize:'0.62rem' }}>{a.readTime}</span>
                  <span className="font-mono text-muted" style={{ fontSize:'0.62rem' }}>{a.date}</span>
                </div>
                <h3 className="font-serif font-medium text-ink text-base leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed hidden md:block">
                  {a.excerpt}
                </p>
              </div>
              <svg className="w-4 h-4 text-muted flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a href="https://medium.com/@atharvakanchan959/about" target="_blank" rel="noopener noreferrer"
            className="btn-o text-sm">All Articles →</a>
        </div>
      </div>
    </section>
  );
}

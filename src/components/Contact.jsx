import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { l:'GitHub',    h:'https://github.com/atharvakanchan25',                         icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { l:'LinkedIn',  h:'https://www.linkedin.com/in/atharva-kanchan-797643271/',      icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { l:'Medium',    h:'https://medium.com/@atharvakanchan959/about',                 icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg> },
  { l:'Pinterest', h:'https://in.pinterest.com/atharva_kanchan/',                   icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
  { l:'Quora',     h:'https://www.quora.com/profile/Atharva-Kanchan',               icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.964 0 3.815-.484 5.441-1.339l-1.131-1.722A9.894 9.894 0 0112 21.9C6.534 21.9 2.1 17.466 2.1 12S6.534 2.1 12 2.1 21.9 6.534 21.9 12c0 2.211-.726 4.253-1.94 5.9l1.131 1.722A11.94 11.94 0 0024 12c0-6.627-5.373-12-12-12zm1.355 16.828c.524.8 1.07 1.494 1.747 1.989l-.893.678c-.8-.524-1.494-1.316-2.1-2.239-.37.046-.747.07-1.109.07-3.576 0-6.3-2.678-6.3-6.326S7.424 5.674 11 5.674s6.3 2.678 6.3 6.326c0 1.94-.786 3.7-2.054 4.97l.109.166v-.308zm-1.355-9.054c-2.239 0-4.2 1.87-4.2 4.226s1.961 4.226 4.2 4.226c.293 0 .578-.031.855-.093-.37-.647-.724-1.178-1.178-1.54l.893-.678c.6.447 1.1 1.039 1.578 1.74.77-.878 1.252-2.024 1.252-3.255 0-2.356-1.961-4.226-4.4-4.226z"/></svg> },
  { l:'Spotify',   h:'https://open.spotify.com/user/31p64yhvoc35knos7ufcxqre6e7u?si=2205d2edd11247e9', icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.318a.75.75 0 01-1.032.25c-2.827-1.727-6.39-2.117-10.586-1.16a.75.75 0 01-.334-1.463c4.588-1.047 8.52-.596 11.7 1.341a.75.75 0 01.252 1.032zm1.47-3.27a.937.937 0 01-1.288.308c-3.234-1.988-8.163-2.563-11.986-1.403a.937.937 0 01-.543-1.794c4.37-1.326 9.8-.683 13.51 1.6a.937.937 0 01.307 1.289zm.127-3.408C15.37 8.39 9.386 8.2 5.895 9.28a1.124 1.124 0 01-.652-2.15c4.04-1.226 10.76-1 14.99 1.42a1.124 1.124 0 01-1.12 1.95v.01z"/></svg> },
  { l:'Email',     h:'mailto:atharvakanchan959@gmail.com',                          icon:<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
];

const FloatField = ({ id, label, type='text', rows }) => {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState('');
  const up = focused || val.length > 0;
  return (
    <div className="relative">
      {rows
        ? <textarea id={id} name={id} rows={rows} required value={val}
            onChange={e=>setVal(e.target.value)} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
            placeholder=" " className="field pt-6 pb-3 resize-none" />
        : <input id={id} name={id} type={type} required value={val}
            onChange={e=>setVal(e.target.value)} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
            placeholder=" " className="field h-14 pt-5" />
      }
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans ${
          up ? 'top-2 text-xs text-accent' : rows ? 'top-4 text-sm text-muted' : 'top-4 text-sm text-muted'
        }`}>
        {label}
      </label>
    </div>
  );
};

export default function Contact() {
  const [status, setStatus]   = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      const r = await fetch('https://formspree.io/f/mknqkpgo', {
        method:'POST', body:new FormData(e.target), headers:{ Accept:'application/json' },
      });
      setStatus(r.ok ? 'ok' : 'err');
      if (r.ok) e.target.reset();
    } catch { setStatus('err'); }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-20" style={{ background:'var(--bg2)' }}>
      <div className="max-w-xl mx-auto">
        <div className="rule mb-20" />

        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="text-center mb-14"
        >
          <span className="label justify-center">Contact</span>
          <h2 className="font-serif font-light text-ink mt-4 mb-5"
            style={{ fontSize:'clamp(2rem,4vw,3rem)' }}>
            Let's build something<br />
            <em className="font-serif italic font-light" style={{ color:'var(--accent)' }}>meaningful.</em>
          </h2>
          <p className="font-sans text-muted text-sm leading-relaxed">
            Open to research collaborations, internships, and interesting conversations.
            I respond within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.1 }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <FloatField id="name"  label="Your Name" />
            <FloatField id="email" label="Email Address" type="email" />
          </div>
          <FloatField id="message" label="Your Message" rows={5} />

          <motion.button
            type="submit" disabled={loading}
            whileHover={{ scale:1.01 }} whileTap={{ scale:0.99 }}
            className="btn-p w-full justify-center py-4 disabled:opacity-50"
          >
            {loading ? (
              <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg> Sending...</>
            ) : 'Send Message →'}
          </motion.button>

          {status === 'ok' && (
            <motion.p initial={{opacity:0}} animate={{opacity:1}}
              className="text-center font-sans text-sm" style={{ color:'var(--accent2)' }}>
              ✓ Message sent. I'll be in touch soon.
            </motion.p>
          )}
          {status === 'err' && (
            <motion.p initial={{opacity:0}} animate={{opacity:1}}
              className="text-center font-sans text-sm text-red-500">
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>

        {/* Social row */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:0.3 }}
          className="flex justify-center gap-3 mt-12"
        >
          {SOCIALS.map(s => (
            <motion.a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
              aria-label={s.l}
              whileHover={{ y:-2, color:'var(--accent)' }}
              className="p-3 rounded-sm text-muted transition-colors duration-200"
              style={{ background:'var(--paper)', border:'1px solid var(--border)' }}>
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

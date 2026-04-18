import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TECH = [
  {
    id:1, size:'large',
    title:'Semantic Segmentation — Aerial Drone Imagery',
    cat:'Deep Learning · Computer Vision',
    desc:'U-Net pipeline on aerial drone images with PyTorch & Albumentations. Achieved high mIoU on multi-class segmentation.',
    tags:['PyTorch','U-Net','OpenCV'],
    href:'https://github.com/atharvakanchan25/U-Net-Image-Segmentation-Pipeline-with-PyTorch-Albumentations',
    num:'01',
  },
  {
    id:2, size:'small',
    title:'Pneumonia Detection — Chest X-Rays',
    cat:'Healthcare AI',
    desc:'CNN with transfer learning for pneumonia classification from chest X-rays.',
    tags:['TensorFlow','CNN'],
    href:'https://github.com/atharvakanchan25/pneumonia-detection-cnn',
    num:'02',
  },
  {
    id:3, size:'small',
    title:'Customer Churn Prediction',
    cat:'Machine Learning',
    desc:'ML pipeline with 92% accuracy + Power BI visualization dashboard.',
    tags:['Scikit-learn','Power BI'],
    href:'https://github.com/atharvakanchan25/customer-churn-prediction.git',
    num:'03',
  },
  {
    id:4, size:'large',
    title:'Cloud E-Commerce Analytics Dashboard',
    cat:'Cloud · Data Analytics',
    desc:'End-to-end AWS + Tableau analytics platform for real-time e-commerce business intelligence.',
    tags:['AWS','Tableau','SQL'],
    href:'https://github.com/atharvakanchan25/cloud-ecommerce-dashboard.git',
    num:'04',
  },
  {
    id:5, size:'small',
    title:'TB Detection — U-Net',
    cat:'Medical Imaging',
    desc:'Deep learning pipeline for tuberculosis detection on chest imaging datasets.',
    tags:['PyTorch','Medical Imaging'],
    href:'https://github.com/atharvakanchan25/tuberculosis-detection-U-Net',
    num:'05',
  },
  {
    id:6, size:'small',
    title:'NLP Text Summarizer',
    cat:'NLP · Transformers',
    desc:'Transformer-based extractive and abstractive text summarization.',
    tags:['Transformers','NLP'],
    href:'https://github.com/atharvakanchan25/nlp-text-summarizer',
    num:'06',
  },
  {
    id:7, size:'large',
    title:'RPA Invoice Processing',
    cat:'Automation · RPA',
    desc:'UiPath automation reducing manual invoice workload by 80% with intelligent data extraction.',
    tags:['UiPath','RPA','Excel'],
    href:'https://github.com/atharvakanchan25/rpa-invoice-automation',
    num:'07',
  },
  {
    id:8, size:'small',
    title:'Student Performance Predictor',
    cat:'Machine Learning',
    desc:'Ensemble regression models predicting academic performance.',
    tags:['Scikit-learn','Python'],
    href:'https://github.com/atharvakanchan25/student-performance-predictor',
    num:'08',
  },
];

const Card = ({ p }) => (
  <motion.a
    href={p.href} target="_blank" rel="noopener noreferrer"
    initial={{ opacity:0, y:20 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:'-40px' }}
    transition={{ duration:0.55, ease:[0.25,0.46,0.45,0.94] }}
    whileHover={{ y:-3 }}
    className="card group block p-7"
  >
    <div className="flex items-start justify-between mb-4">
      <span className="font-mono text-muted" style={{ fontSize:'0.65rem', letterSpacing:'0.15em' }}>
        {p.num}
      </span>
      <svg className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </div>
    <p className="font-mono text-muted mb-2" style={{ fontSize:'0.65rem', letterSpacing:'0.12em' }}>{p.cat}</p>
    <h3 className="font-serif font-medium text-ink leading-snug mb-3 group-hover:text-accent transition-colors duration-300"
      style={{ fontSize: p.size==='large' ? '1.2rem' : '1rem' }}>
      {p.title}
    </h3>
    {p.size === 'large' && (
      <p className="font-sans text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
    )}
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
    </div>
  </motion.a>
);

export default function Work() {
  const [all, setAll] = useState(false);
  const shown = all ? TECH : TECH.slice(0,5);

  const rows = [];
  let i = 0;
  while (i < shown.length) {
    const flip = rows.length % 2 === 1;
    const large = shown[i];
    const smalls = shown.slice(i+1, i+3);
    rows.push({ large, smalls, flip });
    i += 1 + smalls.length;
  }

  return (
    <section id="work" className="py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14"
        >
          <span className="label">Selected Work</span>
          <h2 className="font-serif font-light text-ink mt-3"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
            Tech & Research Projects
          </h2>
        </motion.div>

        <div className="space-y-4">
          {rows.map((row, ri) => (
            <div key={ri} className={`grid gap-4 ${
              row.smalls.length === 2
                ? row.flip
                  ? 'grid-cols-1 md:grid-cols-[1fr_2fr]'
                  : 'grid-cols-1 md:grid-cols-[2fr_1fr]'
                : 'grid-cols-1'
            }`}>
              {row.flip ? (
                <>
                  <div className="grid gap-4">{row.smalls.map(s=><Card key={s.id} p={s}/>)}</div>
                  <Card p={row.large} />
                </>
              ) : (
                <>
                  <Card p={row.large} />
                  {row.smalls.length > 0 && (
                    <div className="grid gap-4">{row.smalls.map(s=><Card key={s.id} p={s}/>)}</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {!all && (
          <div className="mt-10 text-center">
            <button onClick={() => setAll(true)} className="btn-o">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

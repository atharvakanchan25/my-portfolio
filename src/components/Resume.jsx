import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Resume / CV</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          You can download my latest resume to learn more about my skills, projects, and experiences.
        </p>
        <a
          href="/V4-Resume-2.pdf"
          download="AtharvaKanchan_Resume.pdf"
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition"
          aria-label="Download Resume PDF"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;

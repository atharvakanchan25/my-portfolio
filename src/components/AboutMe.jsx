import React from 'react';

const AboutMe = () => {
  const socialLinks = [
<<<<<<< HEAD
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/atharva-kanchan-797643271/'💼' },
=======
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/atharva-kanchan-797643271/', icon: '💼' },
>>>>>>> 8a377f0 (Update LinkedIn URL in About and Contact components)
    { name: 'GitHub', url: 'https://github.com/atharvakanchan25', icon: '💻' },
    { name: 'Email', url: 'mailto:atharvakanchan959@gmail.com', icon: '✉️' },
    { name: 'Phone', url: 'tel:+919922956748', icon: '📱' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img
              src="https://pbs.twimg.com/profile_images/1789489136849543168/E57BSWLk_400x400.jpg"
              alt="Atharva Kanchan"
              className="w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-indigo-500 dark:border-indigo-400"
              loading="lazy"
            />
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-6">
            <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Atharva Kanchan</span>, 
                a passionate Computer Science Engineering student specializing in <span className="font-semibold">Artificial Intelligence and Analytics</span> at 
                MIT ADT University, Pune.
              </p>
              <p>
                With strong expertise in Python, Machine Learning, Deep Learning, and Cloud platforms (AWS), 
                I love building AI-powered solutions that solve real-world problems. My experience spans across 
                projects in medical imaging, NLP, data analytics dashboards, and predictive modeling.
              </p>
              <p>
                Currently, I'm working on cutting-edge projects involving signal processing, edge computing with 
                Jetson Orin AGX, and advanced data analytics. I'm deeply interested in research, automation, 
                and continuously learning new technologies to push the boundaries of what's possible with AI.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition duration-200 transform hover:scale-105"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

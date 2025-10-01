import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Java', level: 75, category: 'Programming' },
    { name: 'MySQL', level: 70, category: 'Programming' },
    { name: 'HTML/CSS', level: 80, category: 'Programming' },
    { name: 'TensorFlow', level: 85, category: 'ML/DL' },
    { name: 'PyTorch', level: 85, category: 'ML/DL' },
    { name: 'Scikit-learn', level: 80, category: 'ML/DL' },
    { name: 'OpenCV', level: 75, category: 'ML/DL' },
    { name: 'Pandas', level: 85, category: 'Data Analysis' },
    { name: 'NumPy', level: 85, category: 'Data Analysis' },
    { name: 'Power BI', level: 80, category: 'Data Analysis' },
    { name: 'Tableau', level: 75, category: 'Data Analysis' },
    { name: 'Git/GitHub', level: 85, category: 'DevOps/Tools' },
    { name: 'Docker', level: 65, category: 'DevOps/Tools' },
    { name: 'AWS', level: 70, category: 'DevOps/Tools' },
    { name: 'CI/CD', level: 65, category: 'DevOps/Tools' },
    { name: 'Linux', level: 70, category: 'DevOps/Tools' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

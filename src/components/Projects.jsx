import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    name: "Semantic Segmentation of Aerial Drone Imagery",
    description: "Semantic segmentation using U-Net and PyTorch on drone images.",
    tech: ["Deep Learning", "PyTorch", "Computer Vision"],
    github: "https://github.com/atharvakanchan25/U-Net-Image-Segmentation-Pipeline-with-PyTorch-Albumentations",
    demo: "",
    type: "Research/Deep Learning",
  },
  {
    id: 2,
    name: "Pneumonia Detection in Chest X-Rays",
    description: "CNN model for detecting pneumonia from X-rays.",
    tech: ["TensorFlow", "Deep Learning", "Python"],
    github: "https://github.com/atharvakanchan25/pneumonia-detection-cnn",
    demo: "",
    type: "Healthcare AI",
  },
  {
    id: 3,
    name: "Cloud-Based E-Commerce Analytics Dashboard",
    description: "E-commerce analytics dashboard using AWS and Tableau.",
    tech: ["AWS", "Tableau", "Data Analytics", "SQL"],
    github: "https://github.com/atharvakanchan25/cloud-ecommerce-dashboard.git",
    demo: "",
    type: "Dashboard/Data Analytics",
  },
  {
    id: 4,
    name: "Customer Churn Prediction System",
    description: "ML pipeline predicting customer churn with Power BI visualization.",
    tech: ["Python", "Power BI", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/atharvakanchan25/customer-churn-prediction.git",
    demo: "",
    type: "Machine Learning",
  },
  {
    id: 5,
    name: "Tuberculosis Detection Using Deep Learning (U-Net Model)",
    description: "Deep learning pipeline for TB detection using U-Net on medical images.",
    tech: ["PyTorch", "Deep Learning", "Medical Imaging"],
    github: "https://github.com/atharvakanchan25/tuberculosis-detection-U-Net",
    demo: "",
    type: "Healthcare AI",
  },
  {
    id: 6,
    name: "NLP-Based Text Summarizer",
    description: "Transformer-based NLP app for extractive and abstractive summarization.",
    tech: ["NLP", "Transformer", "Python"],
    github: "https://github.com/atharvakanchan25/nlp-text-summarizer",
    demo: "",
    type: "NLP",
  },
  {
    id: 7,
    name: "Student Performance Predictor",
    description: "Predict academic performance using regression/classification models.",
    tech: ["ML", "Python", "Regression"],
    github: "https://github.com/atharvakanchan25/student-performance-predictor",
    demo: "",
    type: "Machine Learning",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get all unique technologies
  const allTechs = ['All', ...new Set(projectsData.flatMap(p => p.tech))];
  
  // Filter projects by selected tech
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h2>

        {/* Filter dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="rounded border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Filter Projects by Technology"
          >
            {allTechs.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-indigo-400 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{project.name}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-indigo-600 text-white rounded-full px-3 py-1 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 dark:text-indigo-300 hover:underline font-semibold"
                  >
                    GitHub Repo
                  </a>
                )}
                {project.demo && project.demo.length > 0 && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 dark:text-indigo-300 hover:underline font-semibold"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
              No projects found for this filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

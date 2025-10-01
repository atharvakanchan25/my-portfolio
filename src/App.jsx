import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200 transition-colors duration-500 overflow-x-hidden">
      <Particles
        options={{
          background: { color: { value: "#0a0f2f" } },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true } },
          particles: {
            color: { value: "#8b5cf6" },
            links: { color: "#8b5cf6", distance: 200, enable: true, opacity: 0.6, width: 2 },
            move: { enable: true, speed: 1 },
            number: { value: 80, density: { enable: true, area: 900 } },
            opacity: { value: 0.85, anim: { enable: true, speed: 1, opacity_min: 0.3 } },
            shape: { type: "circle" },
            size: { random: true, value: 4 },
          },
          detectRetina: true,
        }}
        style={{ position: "fixed", zIndex: 0, top: 0, left: 0, width: "100%", height: "100%" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 space-y-24">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutMe />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <footer className="text-center text-gray-400 py-8 select-none">
          © {new Date().getFullYear()} Atharva Kanchan. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

# Portfolio Website - Developer Documentation

This repository hosts the source code for Atharva Kanchan's portfolio website, built to showcase skills, projects, and professional details with an emphasis on modern front-end development best practices.

---

## Live Portfolio

Check out the live portfolio here: [https://atharvakanchan25.github.io/my-portfolio/](https://atharvakanchan25.github.io/my-portfolio/)

---

## Overview

This project is developed using React and Tailwind CSS, featuring dynamic UI elements such as animated particle backgrounds, skill bars, project cards with interactive effects, and dark mode support. The architecture emphasizes modular, reusable components and scalable theming.

---

## Key Technologies and Libraries

- **React 18**: Component-based UI framework
- **Tailwind CSS 3**: Utility-first CSS for rapid UI development and dark mode support
- **react-tsparticles**: Particle animations for background visual effects
- **framer-motion**: Declarative animations and transitions
- **react-slick**: Carousel component for featured content
- **React Hook Form + Yup**: Contact form validation and submission flow
- **ESLint & Prettier**: Code quality and formatting tools
- **Vite / Create-React-App**: Development setup (depending on your preference)

---

## Project Structure
src/
├── components/ # UI components like Navbar, AboutMe, Skills, Projects, Resume, Contact
├── styles/ # Custom styles and Tailwind CSS configurations
├── App.jsx # Root app component managing layout, theme, and background
├── index.jsx # React entry point rendering App into DOM
public/
├── assets/ # Static assets (images, favicon)
tailwind.config.js # Tailwind CSS config with dark mode and color theming
package.json # Dependencies and scripts


---

## Setup and Installation

1. Clone the repo:
```bash
git clone https://github.com/atharvakanchan25/my-portfolio.git
cd portfolio-website
npm install
npm start

Visit http://localhost:3000 in your browser.



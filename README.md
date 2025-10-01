# Portfolio Website - Developer Documentation

This repository hosts the source code for Atharva Kanchan's portfolio website, built to showcase skills, projects, and professional details with an emphasis on modern front-end development best practices.

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
git clone https://github.com/atharvakanchan25/portfolio-website.git
cd portfolio-website

2. Install dependencies:
npm install

3. Start dev server:

4. Visit `http://localhost:3000` in your browser.

---

## Development Notes

- **Dark Mode Implementation**: Uses `class` strategy in Tailwind. Theme toggle is managed via React state and persists across sessions via `localStorage`.
- **Particles Background**: Configured via `react-tsparticles` in `App.jsx`. Positioned fixed with low z-index behind content.
- **Animations**: Content animations leverage `framer-motion` for smooth mounting/unmounting and interaction feedback.
- **Carousel**: Featured projects are showcased with `react-slick`; styles imported globally.
- **Responsive Design**: Tailwind's responsive utilities are used extensively for scaling across devices.
- **Code Quality**: Follow standard React best practices, including split components for maintainability.

---

## Customization

- Profile data and contact info can be updated in `src/components/AboutMe.jsx`.
- Add or update projects in `src/components/Projects.jsx` as well as the featuredProjects list in `App.jsx` for homepage highlighting.
- Modify color themes and fonts inside `tailwind.config.js`.
- Extend animations or background effects by updating relevant component props and CSS.

---

## Deployment

Build the static bundle via:

npm run build

Deploy to static hosting platforms such as Netlify, Vercel, or GitHub Pages using this bundle.

---

## Future Improvements

- Integrate backend APIs for dynamic project loading
- Add multilingual support
- Enhance contact form with serverless submission
- Expand portfolio sections with blog or publications

---

## Contributing

Pull requests and issue reports are welcome. Follow the coding conventions and test your changes before submission.

---

## License

Licensed under the MIT License.

---

## Contact

- GitHub: [atharvakanchan25](https://github.com/atharvakanchan25)
- Email: atharvakanchan959@gmail.com
---

Happy coding! 🚀

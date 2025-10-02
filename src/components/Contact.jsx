import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      // Replace this URL with your actual form handling backend or service URL
      const response = await fetch('https://formspree.io/f/mknqkpgo', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        setStatus('Success! Your message has been sent.');
        form.reset();
      } else {
        setStatus('Error: Please try again later.');
      }
    } catch (error) {
      setStatus('Error: Please try again later.');
    }
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/atharva-kanchan-797643271/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/atharvakanchan25', icon: '💻' },
    { name: 'Email', url: 'mailto:atharvakanchan959@gmail.com', icon: '✉️' },
    { name: 'Phone', url: 'tel:+919922956748', icon: '📱' },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md max-w-xl mx-auto space-y-6"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-indigo-600 dark:text-indigo-400">{status}</p>}
        </form>

        <div className="mt-12 flex justify-center gap-8 text-3xl">
          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

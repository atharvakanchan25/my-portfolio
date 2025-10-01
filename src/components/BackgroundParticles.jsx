// src/components/BackgroundParticles.jsx
import React from 'react';
import Particles from 'react-tsparticles';

const BackgroundParticles = () => {
  return (
    <Particles
      options={{
        background: {
          color: { value: '#0a0f2f' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.7,
              },
            },
          },
        },
        particles: {
          color: { value: '#6c63ff' },
          links: {
            color: '#6c63ff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          collisions: { enable: false },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 70,
          },
          opacity: {
            value: 0.8,
            anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false },
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 2.5,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        zIndex: 0,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default BackgroundParticles;

import React from 'react';
import Particles from 'react-tsparticles';

import './style.css';

function Background() {
  return (
    <div className='background-layer' aria-hidden='true'>
      <Particles
        id='particles'
        options={{
          background: {
            color: {
              value: 'transparent',
            },
            size: 'cover',
            repeat: 'no-repeat',
            position: '50% 50%',
            height: '100vh',
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: false,
                  force: 20,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 250,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#35a7ff', '#64ffda', '#9f7aea'],
            },
            links: {
              enable: true,
              color: '#64ffda',
              distance: 150,
              opacity: 0.28,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              direction: 'none',
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.32,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}

export default Background;

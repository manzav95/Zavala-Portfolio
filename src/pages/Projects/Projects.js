import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import primavera from '../../images/primaverataxx.png';
import deadline from '../../images/deadline.png';
import fridgetotable from '../../images/fridgetotable.png';
import crystalgame from '../../images/crystalgame.png';

import './style.css';

function Projects() {
  return (
    <section className='project-wrapper' id='projects'>
      <div className='projects-inner'>
        <div className='projects-heading'>
          <div className='section-kicker'>Selected Work</div>
          <h2 className='project-header'>Featured builds with product intent.</h2>
          <p>
            A snapshot of applications, client work, and interactive projects
            that show front-end polish, full-stack collaboration, and practical
            problem solving.
          </p>
        </div>
        <div className='project-container'>
          <ProjectCard
            title='Primavera Taxx'
            type='Client website'
            live='https://primavera-taxx.netlify.app/'
            code='https://github.com/manzav95/PrimaveraTaxx'
            image={primavera}
            description='A professional tax preparation website designed to build trust quickly and convert visitors into client inquiries.'
            tags={['React', 'Responsive UI', 'Netlify']}
          />
          <ProjectCard
            title='Fridge To Table'
            type='Collaborative app'
            code='https://github.com/surigao86/FridgeToTable/tree/master/frontend'
            image={fridgetotable}
            description='A recipe discovery concept that helps people turn ingredients they already have into meal ideas.'
            tags={['React', 'API integration', 'Team build']}
          />
          <ProjectCard
            title='Deadline'
            type='Productivity tool'
            code='https://github.com/jongomer22/deadline'
            image={deadline}
            description='A deadline-focused planning app concept for keeping tasks, priorities, and due dates easier to track.'
            tags={['JavaScript', 'UX flows', 'Collaboration']}
          />
          <ProjectCard
            title='Crystal Collector'
            type='Interactive game'
            live='https://manzav95.github.io/Crystal-Collectors-Game/'
            code='https://github.com/manzav95/Crystal-Collectors-Game'
            image={crystalgame}
            description='A browser game that demonstrates interactive state, scoring logic, and quick feedback loops.'
            tags={['JavaScript', 'Game logic', 'GitHub Pages']}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faPython,
  faGit,
  faReact,
  faNpm,
  faGithub,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import './style.css';

const skillGroups = [
  {
    title: 'Front end',
    summary: 'Accessible, responsive interfaces with reusable React components.',
    skills: [
      { label: 'HTML5', icon: faHtml5, id: 'html' },
      { label: 'CSS3', icon: faCss3Alt, id: 'css' },
      { label: 'JavaScript', icon: faJsSquare, id: 'javascript' },
      { label: 'React', icon: faReact, id: 'react' },
    ],
  },
  {
    title: 'Back end',
    summary: 'Practical APIs, server-side logic, and data-backed features.',
    skills: [
      { label: 'Node.js', icon: faNodeJs, id: 'api' },
      { label: 'Python', icon: faPython, id: 'python' },
      { label: 'Firebase', icon: faServer, id: 'firebase' },
      { label: 'MySQL', icon: faDatabase, id: 'mysql' },
      { label: 'MongoDB', icon: faDatabase, id: 'mongodb' },
    ],
  },
  {
    title: 'Workflow',
    summary: 'Version control, package management, and deployment-ready builds.',
    skills: [
      { label: 'Git', icon: faGit, id: 'git' },
      { label: 'GitHub', icon: faGithub, id: 'github-skill' },
      { label: 'npm', icon: faNpm, id: 'npm' },
    ],
  },
];

function Skills() {
  return (
    <section className='skills-wrapper' id='skills'>
      <div className='skills-inner'>
        <header className='skills-header'>
          <div className='section-kicker'>Capabilities</div>
          <h2>Modern web development from idea to shipped product.</h2>
          <p>
            A focused toolkit for building landing pages, dashboards, business
            tools, and full-stack products that are easy to maintain.
          </p>
        </header>

        <div className='skill-groups'>
          {skillGroups.map((group) => (
            <article className='skill-group' key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.label}>
                    <FontAwesomeIcon id={skill.id} icon={skill.icon} size='2x' />
                    <span>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

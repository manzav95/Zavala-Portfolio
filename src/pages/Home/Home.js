import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Background from './../../components/Background/Background';
import './style.css';

function Home() {
  return (
    <div>
      <Background />

      <header className='landing-wrapper diagonal' id='home'>
        <section className='intro-wrapper'>
          <p className='eyebrow'>Full-stack web developer</p>
          <h1 className='first-line'>
            I build polished web products that turn ideas into reliable digital
            experiences.
          </h1>
          <p className='second-line'>
            Hi, I'm <span id='name'>Manuel Zavala</span>. I craft responsive
            React interfaces, practical Node services, and launch-ready
            applications with a strong eye for usability.
          </p>
          <div className='hero-actions'>
            <a className='primary-action' href='/#projects'>
              View selected work
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className='secondary-action' href='/#contact'>
              Start a project
            </a>
          </div>
          <div className='hero-stats' aria-label='Portfolio highlights'>
            <div>
              <strong>04</strong>
              <span>featured builds</span>
            </div>
            <div>
              <strong>Full stack</strong>
              <span>React, Node, data</span>
            </div>
            <div>
              <strong>UX first</strong>
              <span>fast, clear, responsive</span>
            </div>
          </div>
        </section>
        <section className='social-icons'>
          <a
            href='https://github.com/manzav95'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub profile'
          >
            <FontAwesomeIcon id='github' icon={faGithubSquare} size='3x' />
          </a>
          <a
            href='https://www.linkedin.com/in/mzavala0402/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn profile'
          >
            <FontAwesomeIcon id='linked' icon={faLinkedin} size='3x' />
          </a>
          <a
            href='https://twitter.com/zavalalifestyle'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter profile'
          >
            <FontAwesomeIcon id='twitter' icon={faTwitterSquare} size='3x' />
          </a>
        </section>
      </header>
    </div>
  );
}

export default Home;

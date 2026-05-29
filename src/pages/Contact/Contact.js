import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Contact = () => {
  return (
    <section className='contact-main' id='contact'>
      <div className='contact-inner'>
        <div className='section-kicker'>Contact</div>
        <div className='contact-card'>
          <div>
            <h2>Have a build in mind?</h2>
            <p>
              I am interested in web projects where thoughtful design and solid
              implementation both matter. Send a message, share the goal, and I
              will help map it into a clean web experience.
            </p>
          </div>
          <div className='contact-actions'>
            <a
              className='contact-primary'
              href='https://www.linkedin.com/in/mzavala0402/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Message me on LinkedIn
            </a>
            <div className='contact-socials'>
              <a
                href='https://github.com/manzav95'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub profile'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href='https://www.linkedin.com/in/mzavala0402/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn profile'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href='https://twitter.com/zavalalifestyle'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter profile'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

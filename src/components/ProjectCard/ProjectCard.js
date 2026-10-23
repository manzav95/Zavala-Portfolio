import React from 'react';
import './style.css';
import Tilt from 'react-tilt';

function ProjectCard(props) {
  const tags = props.tags || [];
  const cardClassName = props.featured ? 'main-card featured-project' : 'main-card';

  return (
    <article className={cardClassName}>
      <Tilt
        className='card-wrapper'
        options={{ max: 10, reverse: true, scale: 1.02, speed: 1250 }}
      >
        <div className='project-image-wrap'>
          {props.image ? (
            <img className='project-image' src={props.image} alt={props.title} />
          ) : (
            <div className='project-mockup' aria-hidden='true'>
              <span>PI</span>
              <div className='mockup-lines'>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          )}
        </div>
        <div className='project-info'>
          <p className='project-type'>{props.type}</p>
          <h3 className='card-title'>{props.title}</h3>
          <p className='project-description'>{props.description}</p>
          <ul className='project-tags'>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className='project-links'>
            {props.live && (
              <a
                className='live-site'
                href={props.live}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Site
              </a>
            )}
            {props.code && (
              <a
                className='view-code'
                href={props.code}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Code
              </a>
            )}
            {props.note && <span className='project-note'>{props.note}</span>}
          </div>
        </div>
      </Tilt>
    </article>
  );
}

export default ProjectCard;

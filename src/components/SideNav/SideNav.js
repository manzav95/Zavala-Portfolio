import React from 'react';
import resume from '../../images/resume.pdf';

import './style.css';

const toggleMobileButton = function () {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let body = document.querySelector('body');
  let mobileWrapper = document.querySelector('.sidenav-wrapper');

  burger.classList.toggle('burger-opened');
  mobileMenu.classList.toggle('mobile-menu-opened');
  body.classList.toggle('body-no-scroll');
  mobileWrapper.classList.toggle('mobile-wrapper-opened');
};

function SideNav() {
  return (
    <div className='sidenav-wrapper'>
      <a className='mobile-brand' href='/#home' aria-label='Manuel Zavala home'>
        MZ
      </a>
      <button
        className='burger'
        id='burger'
        onClick={toggleMobileButton}
        aria-label='Toggle navigation'
        type='button'
      >
        <span className='burger-part'></span>
        <span className='burger-part'></span>
        <span className='burger-part'></span>
      </button>
      <nav className='mobile-menu'>
        <ul>
          <li>
            <a href='/#home' onClick={toggleMobileButton}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' onClick={toggleMobileButton}>
              About
            </a>
          </li>
          <li>
            <a href='#skills' onClick={toggleMobileButton}>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' onClick={toggleMobileButton}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' onClick={toggleMobileButton}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={resume}
              target='_blank'
              rel='noopener noreferrer'
              download="Manuel Zavala's Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;

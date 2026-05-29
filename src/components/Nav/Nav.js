import React from 'react';
// import SideNav from '../SideNav/SideNav';
import resume from '../../images/resume.pdf';
import { Link } from 'react-scroll';

import './style.css';

function Nav() {
  return (
    <nav className='nav-wrapper'>
      <a className='nav-brand' href='/#home' aria-label='Manuel Zavala home'>
        MZ
      </a>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
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
  );
}

export default Nav;

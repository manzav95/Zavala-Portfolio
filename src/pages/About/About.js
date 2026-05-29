import React from 'react';
import './style.css';

function About() {
  return (
    <section className='about' id='about'>
      <div className='about-wrapper'>
        <div className='section-kicker'>About</div>
        <div className='about-grid'>
          <div>
            <h2 className='about-header'>
              Developer, problem solver, and product-minded builder.
            </h2>
          </div>
          <div className='about-me'>
            <p>
              I create web applications that feel clean on the surface and
              dependable underneath. My work spans responsive interfaces,
              API-driven features, databases, deployment, and the details that
              make a product easier to use.
            </p>
            <p>
              The throughline is simple: understand the user, choose the right
              tool for the job, and ship an experience that is fast, accessible,
              and maintainable.
            </p>
            <div className='about-cards'>
              <article>
                <span>01</span>
                <h3>Interface craft</h3>
                <p>Layouts, interactions, and visual systems built for clarity.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Full-stack thinking</h3>
                <p>React front ends connected to practical server and data layers.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Launch mindset</h3>
                <p>Deployment-aware builds with attention to performance and polish.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

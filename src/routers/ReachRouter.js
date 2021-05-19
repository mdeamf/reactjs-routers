import { useEffect } from 'react';
import { Router, Link } from '@reach/router';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

const LOG = '[REACH ROUTER]';

export const ReachRouter = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Router>
        <HomePage path="/" />
        <AboutPage path="about" />
        <ContactPage path="contact" />
      </Router>
    </div>
  );
};

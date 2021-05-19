import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { useEffect } from 'react';

const LOG = '[REACT ROUTER DOM]';

export const ReactRouterDom = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <BrowserRouter>
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
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <h1>404 | Page not found!</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

import './Resets.css';
import styles from './App.css';

const App = () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <div className={styles.app}>
          <ScrollToTop />
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeave={false}
          >
            <Switch key={location.key} location={location}>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransitionGroup>
        </div>
      )}
    />
  </Router>
);

export default App;

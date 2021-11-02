import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import LandingContainer from '../landing-container';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={LandingContainer} />
        </section>
      </BrowserRouter>
    );
  }
}

export default hot(App);
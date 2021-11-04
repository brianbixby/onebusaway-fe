import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { makeAsyncComponent } from "./../../lib/util.js";
import Navbar from '../navbar';
import LandingContainer from '../landing-container';

const ProfileContainer = makeAsyncComponent(import('../profile-container'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path='*' component={Navbar} />
          <Route exact path='/' component={LandingContainer} />
          <Route exact path='/user/:profileID' component={ProfileContainer} />
        </section>
      </BrowserRouter>
    );
  }
}

export default hot(App);
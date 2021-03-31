import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  About,
  Services,
  Cases,
  Careers,
  Contact,
  PrivacyPolicy,
  TermsOfService,
  Error,
} from './pages';
import { Footer, Navbar, ScrollToTop, BackToTop } from './components';
import './scss/App.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <Route path='/services' exact>
          <Services />
        </Route>
        <Route path='/cases'>
          <Cases />
        </Route>
        <Route path='/careers'>
          <Careers />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/privacy-policy'>
          <PrivacyPolicy />
        </Route>
        <Route path='/terms-of-service'>
          <TermsOfService />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;

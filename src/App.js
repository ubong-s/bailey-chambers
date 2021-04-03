import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
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
import { AnimatePresence } from 'framer-motion';
import './scss/App.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;

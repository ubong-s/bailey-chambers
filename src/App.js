import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './scss/App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/cases' component={Cases} />
        <Route path='/careers' component={Careers} />
        <Route path='/contact' component={Contact} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/terms-of-service' component={TermsOfService} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

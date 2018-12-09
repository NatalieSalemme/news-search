import React from 'react';
import App from '../App';
import ComingSoon from './FooterLink/ComingSoon';
import StoryPage from './StoryPage';
import About from './FooterLink/About';
import Contact from './FooterLink/Contact';
import Travel from './FooterLink/Travel';
import Nature from './FooterLink/Nature';
import Hollywood from './FooterLink/Hollywood';
import Food from './FooterLink/Food';
import Local from './FooterLink/Local';
import Sports from './FooterLink/Sports';
import Culture from './FooterLink/Culture';
import TV from './FooterLink/TV';
import Weather from './FooterLink/Weather';
import TermsOfService from './FooterLink/TermsOfService';
import PrivacyPolicy from './FooterLink/PrivacyPolicy';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/storypage/:id" component={StoryPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route path="/travel" component={Travel} />
      <Route path="/nature" component={Nature} />
      <Route path="/hollywood" component={Hollywood} />
      <Route path="/food" component={Food} />
      <Route path="/local" component={Local} />
      <Route path="/sports" component={Sports} />
      <Route path="/culture" component={Culture} />
      <Route path="/tv" component={TV} />
      <Route path="/weather" component={Weather} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={ComingSoon} />
    </Switch>
  </BrowserRouter>
);
export default Router;

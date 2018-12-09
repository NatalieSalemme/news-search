import React from 'react';
import App from '../App';
import ComingSoon from './FooterLink/ComingSoon';
import StoryPage from './StoryPage';
import About from './FooterLink/About';
import Contact from './FooterLink/Contact';
import Travel from './FooterLink/Travel';
import Nature from './FooterLink/Nature';

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
      <Route component={ComingSoon} />
    </Switch>
  </BrowserRouter>
);
export default Router;

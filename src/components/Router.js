import React from 'react';
import App from '../App';
import ComingSoon from './ComingSoon';
import StoryPage from './StoryPage';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';

  const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/storypage/:id" component={StoryPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route component={ComingSoon} />
      </Switch>
    </BrowserRouter>
  )
export default Router;

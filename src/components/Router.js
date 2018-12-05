import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
  import App from '../App';
  import StoryPage from './StoryPage';
  import About from './About';
  import Contact from './Contact';

  const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/storypage/:id" component={StoryPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
export default Router;

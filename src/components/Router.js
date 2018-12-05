import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
  import App from '../App';
  import StoryPage from './StoryPage';

  const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/storypage/:id" component={StoryPage} />
      </Switch>
    </BrowserRouter>
  )
export default Router;

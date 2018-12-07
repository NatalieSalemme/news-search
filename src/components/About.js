import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

import { Header } from 'semantic-ui-react';

const About = props => (
  <div>
  <div className="about-container">
    <Menu />
    <Header as="h1">About Us</Header>
    </div>
    <Footer />
  </div>
);

export default About;

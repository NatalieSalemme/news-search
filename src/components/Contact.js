import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

import { List } from 'semantic-ui-react';

const Contact = props => (
  <div>
    <div className="contact-container">
    <Menu />
    <h1>Contact Page</h1>
    <List>
      <List.Item icon="users" content="Natalie Salemme" />
      <List.Item icon="marker" content="San Diego, CA" />
      <List.Item
        icon="mail"
        content={
          <a href="mailto:nataliesalemme@gmail.com">nataliesalemme@gmail.com</a>
        }
      />
      <List.Item
        icon="linkify"
        content={
          <a href="https://github.com/NatalieSalemme/redux-search">Github</a>
        }
      />
    </List>
    </div>
    <Footer />
  </div>
);
export default Contact;

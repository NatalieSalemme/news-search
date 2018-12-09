import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import FormPage from './FormPage';

import { List } from 'semantic-ui-react';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <div className="contact-container">
          <Menu />
          <h1 style={{ textAlign: 'center' }}>Contact Page</h1>
          <FormPage />
          <div className="contact-info">
            <img
              className="contact-image"
              alt="Natalie Salemme"
              src="https://i0.wp.com/yesmillennial.com/wp-content/uploads/2018/10/IMG_4599.jpeg?resize=200%2C200"
            />
            <List>
              <List.Item icon="users" content="Natalie Salemme" />
              <List.Item icon="marker" content="San Diego, CA" />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:nataliesalemme@gmail.com">
                    nataliesalemme@gmail.com
                  </a>
                }
              />
              <List.Item
                icon="linkify"
                content={
                  <a href="https://github.com/NatalieSalemme/redux-search">
                    Github
                  </a>
                }
              />
            </List>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default Contact;

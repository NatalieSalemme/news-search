import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import FormPage from './FormPage';

import { List, Image, Grid} from 'semantic-ui-react';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="contact-container">
          <Menu />

          <h1 style={{ textAlign: 'center' }}>Contact Page</h1>
          <Grid centered stackable>
            <Grid.Row>
              <Grid.Column width={4} className="empty-grid-cell" />
              <Grid.Column width={8}>
                <FormPage />
              </Grid.Column>
              <Grid.Column width={1} className="empty-grid-cell" />
              <Grid.Column width={3} >
                <div className="contact-info">
                  <Image
                    centered
                    className="contact-image"
                    alt="Natalie Salemme"
                    src="https://i0.wp.com/yesmillennial.com/wp-content/uploads/2018/10/IMG_4599.jpeg?resize=200%2C200"
                  />
                  <List>
                    <List.Item
                      className="contact-item"
                      icon="users"
                      content="Natalie Salemme"
                    />
                    <List.Item
                      className="contact-item"
                      icon="marker"
                      content="San Diego, CA"
                    />
                    <List.Item
                      className="contact-item"
                      icon="mail"
                      content={
                        <a href="mailto:nataliesalemme@gmail.com">
                          nataliesalemme@gmail.com
                        </a>
                      }
                    />
                    <List.Item
                      className="contact-item"
                      icon="linkify"
                      content={
                        <a
                          href="https://github.com/NatalieSalemme/redux-search"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      }
                    />
                  </List>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;

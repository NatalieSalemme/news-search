import React from 'react';
import { List, Container } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer-container">
  <Container >
  <List horizontal >
    <List.Item className="list-item" href="#">About Us</List.Item>
    <List.Item className="list-item" href="#">Careers</List.Item>
    <List.Item className="list-item" href="#">Employment</List.Item>
  </List>
  <br />
    <List horizontal>

      <List.Item className="list-item" href="#">Terms of Service</List.Item>
      <List.Item className="list-item" href="#">Privacy Policy</List.Item>
      <List.Item className="list-item" href="#">Contact</List.Item>
      <List.Item className="list-item" href="#">Sitemap</List.Item>
      <List.Item className="list-item" href="#">Advertise</List.Item>
      <List.Item href="#">
        © Natalie Salemme 2018
      </List.Item>
    </List>
    <hr />

  </Container>
  </div>
);

export default Footer;

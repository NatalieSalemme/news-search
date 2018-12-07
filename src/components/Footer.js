import React from 'react';
import { List, Container, Grid, Header } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer-container">
  <Container >
    <Grid columns={3} divided >
      <Grid.Row className="footer-links-container">
        <Grid.Column>
          <List.Item className="list-item" href="#">About Us</List.Item>
          <br />
          <List.Item className="list-item" href="#">Careers</List.Item>
          <br />
          <List.Item className="list-item" href="#">Employment</List.Item>
          <br />
          <List.Item className="list-item" href="#">Travel</List.Item>
          <br />
          <List.Item className="list-item" href="#">Nature</List.Item>
        </Grid.Column>
        <Grid.Column>

          <List.Item className="list-item" href="#">News</List.Item>
            <br />
          <List.Item className="list-item" href="#">Food</List.Item>
            <br />
          <List.Item className="list-item" href="#">Local</List.Item>
            <br />
          <List.Item className="list-item" href="#">Sports</List.Item>
            <br />
          <List.Item className="list-item" href="#">Culture</List.Item>

        </Grid.Column>
        <Grid.Column>
          <List.Item className="list-item" href="#">TV</List.Item>
          <br />
          <List.Item className="list-item" href="#">Weather</List.Item>
          <br />
          <List.Item className="list-item" href="#">Terms of Service</List.Item>
          <br />
          <List.Item className="list-item" href="#">Privacy Policy</List.Item>
          <br />
          <List.Item className="list-item" href="#">Contact</List.Item>

        </Grid.Column>
      </Grid.Row>

      <br />
      <Grid>
      <Grid.Row>
        <Container>
          <List.Item className="list-item copyright">
            © Natalie Salemme 2018
          </List.Item>
      </Container>
      </Grid.Row>
    </Grid>
    </Grid>




  </Container>
  </div>
);

export default Footer;

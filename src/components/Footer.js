import React from 'react';
import { List, Container, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
  <Container >
    <Grid columns={3} divided >
      <Grid.Row className="footer-links-container">
        <Grid.Column>
          <Link
            to="/about">
            <List.Item className="list-item" href="#">About Us</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Careers</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Employment</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Travel</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Nature</List.Item>
            <br />
          </Link>
        </Grid.Column>


        <Grid.Column>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">News</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Food</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Local</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Sports</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Culture</List.Item>
            <br />
          </Link>

        </Grid.Column>
        <Grid.Column>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">TV</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Weather</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Terms of Service</List.Item>
            <br />
          </Link>
          <Link
            to="/ComingSoon">
            <List.Item className="list-item" href="#">Privacy Policy</List.Item>
            <br />
          </Link>
          <Link
            to="/contact">
            <List.Item className="list-item" href="#">Contact</List.Item>
            <br />
          </Link>


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

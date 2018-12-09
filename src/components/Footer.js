import React from 'react';
import { List, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = () => (
  <div className="footer-container">
    <Container>
      <Grid columns={3} divided>
        <Grid.Row className="footer-links-container">
          <Grid.Column>
            <Link to="/about">
              <List.Item className="list-item">About Us</List.Item>
              <br />
            </Link>
            <Link to="/careers">
              <List.Item className="list-item">Careers</List.Item>
              <br />
            </Link>
            <Link to="/tech">
              <List.Item className="list-item">Tech</List.Item>
              <br />
            </Link>
            <Link to="/travel">
              <List.Item className="list-item">Travel</List.Item>
              <br />
            </Link>
            <Link to="/nature">
              <List.Item className="list-item">Nature</List.Item>
              <br />
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to="/hollywood">
              <List.Item className="list-item">Hollywood</List.Item>
              <br />
            </Link>
            <Link to="/food">
              <List.Item className="list-item">Food</List.Item>
              <br />
            </Link>
            <Link to="/local">
              <List.Item className="list-item">Local</List.Item>
              <br />
            </Link>
            <Link to="/sports">
              <List.Item className="list-item">Sports</List.Item>
              <br />
            </Link>
            <Link to="/culture">
              <List.Item className="list-item">Culture</List.Item>
              <br />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/tv">
              <List.Item className="list-item">TV</List.Item>
              <br />
            </Link>
            <Link to="/weather">
              <List.Item className="list-item">Weather</List.Item>
              <br />
            </Link>
            <Link to="/terms">
              <List.Item className="list-item">Terms of Service</List.Item>
              <br />
            </Link>

            <Link to="/privacy-policy">
              <List.Item className="list-item">Privacy Policy</List.Item>
              <br />
            </Link>
            <Link to="/contact">
              <List.Item className="list-item">Contact</List.Item>
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

const mapStateToProps = state => {
  return {
    storiesList: state.storiesList,
    inputText: state.inputText,
    selectedStory: state.selectedStory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorySelect: (e, story) => {
      const action = { type: 'ON_STORY_SELECT', selectedStory: e };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

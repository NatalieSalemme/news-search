import React from 'react';
import { connect } from 'react-redux';
import Api from './Api';
import { Link } from 'react-router-dom';
import { Card, Image, Grid, Button } from 'semantic-ui-react';
import Footer from './Footer';

function matchMe(str) {
  let regEx = /\d{4}-\d{2}-\d{2}/;
  let match = str.match(regEx)[0].split('-');
  let results = [match[1], match[2], match[0]].join('/');
  return results;
}

function trimDescription(desc) {
  if (desc) {
    if (desc.length > 150) {
      return (
        desc
          .split(' ')
          .slice(0, 19)
          .join(' ') + '...'
      );
    }
  }
  return desc;
}

function trimTitle(title) {
  if (title.length > 40) {
    return (
      title
        .split(' ')
        .slice(0, 9)
        .join(' ') + '...'
    );
  }
  return title;
}

class StoriesList extends React.Component {
  componentDidMount(dispatch) {
    this.props.onInitialLoad();
  }
  render() {
    return (
      <div style={{marginTop: '8em'}}>
        <h1 style={{marginBottom: '2em'}}>News when YOU need it</h1>
        <Grid className="card-grid-container">
          {this.props.storiesList.map((story, index) => {
            return (
              <div className="card-container" key={index}>
                <Card>
                  <Image className="story-thumbnail" src={story.urlToImage} />
                  <Card.Content className="card-content">
                    <Button
                      className="main-page-button"
                      onClick={e => this.props.onStorySelect(story)}
                      basic
                      color="red"
                    >
                      <Link
                        to={{
                          pathname: `/storypage/${trimTitle(story.title).slice(
                            0,
                            33
                          )}`,
                        }}
                      >
                        View Story
                      </Link>
                    </Button>
                    <Card.Header className="main-title">
                      {trimTitle(story.title)}
                    </Card.Header>
                    <Card.Meta>{matchMe(story.publishedAt)}</Card.Meta>

                    <Card.Description>
                      <p>{trimDescription(story.description)}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </div>
            );
          })}
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    storiesList: state.storiesList,
    inputText: state.inputText,
    selectedStory: state.selectedStory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialLoad: () => {
      Api.testing(dispatch);
    },
    onStorySelect: (e, story) => {
      console.log(e);
      const action = { type: 'ON_STORY_SELECT', selectedStory: e };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesList);

import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Api from './Api';
import { Link } from 'react-router-dom';
import { Card, Image, Grid, Button } from 'semantic-ui-react';

function matchMe(str) {
  let regEx = /\d{4}-\d{2}-\d{2}/;
  let match = str.match(regEx)[0].split('-');
  let results = [match[1], match[2], match[0]].join('/');
  return results;
}

function trimDescription(desc) {
  console.log(this.props);
  if(desc.length > 150) {
    return desc.split(' ').slice(0,19).join(' ') + '...';
  }
    return desc;
}

function trimTitle(title) {
  if(title.length > 40) {
  return title.split(' ').slice(0,9).join(' ') + '...';
  }
  return title;
}

class StoriesList extends React.Component {
  componentDidMount(dispatch) {
    this.props.onInitialLoad();
  }
  render() {
    return (
      <div>
          <Menu />
        <h1>News when YOU need it</h1>
        <form onSubmit={e => this.props.onInputSubmit(e, this.props.inputText)}>
          <input
            className="search-input"
            value={this.props.inputText}
            onChange={this.props.onInputChange}
          />
        </form>
        <Grid className="card-grid-container" >
          {this.props.storiesList.map((story, index) => {
            return (
              <div className="card-container" key={index}>
                <Card>

                  <Image className="story-thumbnail" src={story.urlToImage} />
                  <Card.Content className="card-content">
                    <Button
                      className="main-page-button"
                      onClick={(e) => this.props.onStorySelect(story)}
                      basic color='red'>
                      <Link to={{ pathname: `/storypage/${trimTitle(story.title).slice(0,33)}`}}>View Story</Link>
                    </Button>
                    <Card.Header className="main-title">{trimTitle(story.title)}</Card.Header>
                    <Card.Meta>{matchMe(story.publishedAt)}</Card.Meta>

                    <Card.Description>
                      <p>{story.description.split(' ').slice(0,19).join(' ') }</p>
                    </Card.Description>

                  </Card.Content>
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }

}



const mapStateToProps = state => {
    console.log(state);
  return {
    storiesList: state.storiesList,
    inputText: state.inputText,
    selectedStory: state.selectedStory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e => {
      const action = { type: 'ON_INPUT_CHANGE', text: e.target.value };
      dispatch(action);
    },
    onInputSubmit: (e, query) => {
      e.preventDefault();
      Api.getStories(dispatch, query);
    },
    onInitialLoad: () => {
      Api.testing(dispatch);
    },
    onStorySelect: (e, story) => {
      console.log(e);
      const action = {type: 'ON_STORY_SELECT', selectedStory: e};
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesList);

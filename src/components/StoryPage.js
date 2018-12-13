import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import Menu from './Menu';
import Footer from './Footer';

/* Converts date format from API to readable date format */

function matchMe(str) {
  let regEx = /\d{4}-\d{2}-\d{2}/;
  let match = str.match(regEx)[0].split('-');
  let results = [match[1], match[2], match[0]].join('/');
  return results;
}

class StoryPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      title,
      content,
      description,
      publishedAt,
      url,
      urlToImage,
      source,
    } = this.props.selectedStory;

    return (
      <div>
        <div className="story-page-container">
          <Menu />
          <h1 className="title-container">{title}</h1>
          <img className="story-page-img" src={urlToImage} alt={title} />
          <div className="published">
            Published: {matchMe(publishedAt)} by {source.name}
          </div>
          <div className="content-container">
            {description}
            {content}
          </div>
          <div className="link-buttons">
            <Button color="teal" href={url} target="_blank">
              See Full Story
            </Button>
            <a
              className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=${title.slice(
                0,
                90
              )} ${url}`}
            >
              <Button color="twitter">
                <Icon name="twitter" />
                Twitter
              </Button>
            </a>
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button>
            <Button color="instagram">
              <Icon name="instagram" /> Instagram
            </Button>
          </div>
        </div>
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

export default connect(mapStateToProps)(StoryPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import Menu from './Menu';

function matchMe(str) {
  let regEx = /\d{4}-\d{2}-\d{2}/;
  let match = str.match(regEx)[0].split('-');
  let results = [match[1], match[2], match[0]].join('/');
  return results;
}
const determineLink = (url) => {

  switch(url) {
    case 'Al.com':
      return <a href="https://www.al.com/" target="_blank"><img
      className="al-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/O794HevY_400x400_40x40.jpg"/></a>;


    case 'Al Jazeera English':
      return <a href="https://www.aljazeera.com/" target="_blank"><img className="al-jazeera-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/aj-logo-lg-124_60x70.png" /></a>;

    case 'CBS News':
      return <a href="https://www.cbsnews.com/" target="_blank"><img
      className="cbs-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/world-cbs-news-logo-png-35_2_190x40.png"/></a>;

    case 'Fantasypros.com':
      return <a href="https://www.fantasypros.com/" target="_blank">
        <img
          className="fantasy-pros-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/fantasypros-logo_200x75.png" />
        </a>;

    case 'Mmajunkie.com':
      return <a href="https://mmajunkie.com/" target="_blank"><img className="mma-junkie-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/aj-logo-lg-124_60x70.png" /></a>;

    case 'NBC News':
      return <a href="https://www.nbcnews.com/" target="_blank"><img className="nbc-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_60x50.jpg" /></a>;


    case 'News9.com':
      return <a href="http://www.news9.com/" target="_blank"><img
        className="news-9-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/220px-News-9-Logo_60x60.png"/></a>;



    case 'Npr.org':
      return <a href="https://www.npr.org/" target="_blank"><img className="npr-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/1200px-National_Public_Radio_logo.svg_80x30.png" /></a>;

    case 'Vice News':
      return <a href="https://news.vice.com/en_us" target="_blank"><img className="vice-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_200x75.png" /></a>;


    default:
      return url;
  }
}
class StoryPage extends Component {
  render() {
    const {
      title,
      content,
      description,
      publishedAt,
      url,
      urlToImage,
      source
    } = this.props.selectedStory;

    return (
      <div className="story-page-container">
        <Menu />
        <h1 className="title-container">{title}</h1>
        <img className="story-page-img" src={urlToImage} alt={title} />
        <div className="published">Published: {matchMe(publishedAt)}  by {determineLink(source.name)}</div>
        <div className="content-container">
          {description}
          {content}
        </div>
        <Button color="teal" href={url} target="_blank">
          See Full Story
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="linkedin">
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
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

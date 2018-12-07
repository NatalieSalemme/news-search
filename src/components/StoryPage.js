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


    case 'Bbc.com':
      return <a href="https://www.bbc.com" target="_blank"><img
              className="bbc-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/images_120x40.png"/></a>;


    case 'CBS News':
    case 'Cbssports.com':
      return <a href="https://www.cbsnews.com/" target="_blank"><img
      className="cbs-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/world-cbs-news-logo-png-35_2_190x40.png"/></a>;


    case 'CNN':
      return <a href="https://www.cnn.com/" target="_blank"><img className="cnn-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-1_90x45.png" /></a>;

    case 'Fantasypros.com':
      return <a href="https://www.fantasypros.com/" target="_blank">
        <img
          className="fantasy-pros-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/fantasypros-logo_200x75.png" />
        </a>;

    case 'Foxbusiness.com':
      return <a href="https://www.foxbusiness.com/" target="_blank"><img
            className="fox-business-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-1_90x50.jpg"/></a>;

    case 'Fox News':
      return <a href="https://www.foxnews.com" target="_blank"><img
              className="fox-news-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-2_1_60x50.png"/></a>;

    case 'The Hill':
        return <a href="https://thehill.com" target="_blank"><img
            className="the-hill-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_1_120x70.jpg"/></a>;

    case 'Mmajunkie.com':
      return <a href="https://mmajunkie.com/" target="_blank"><img className="mma-junkie-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/aj-logo-lg-124_60x70.png" /></a>;

    case 'NBC News':
      return <a href="https://www.nbcnews.com/" target="_blank"><img className="nbc-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_60x50.jpg" /></a>;

    case 'Nesn.com':
      return <a href="https://nesn.com/" target="_blank"><img className="nesn-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-2_120x80.png" /></a>;


    case 'News9.com':
      return <a href="http://www.news9.com/" target="_blank"><img
        className="news-9-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/220px-News-9-Logo_60x60.png"/></a>;



    case 'Npr.org':
      return <a href="https://www.npr.org/" target="_blank"><img className="npr-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/1200px-National_Public_Radio_logo.svg_80x30.png" /></a>;


    case 'TechRadar':
      return <a href="https://www.techradar.com/" target="_blank"><img className="tech-radar-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-3_120x70.png" /></a>;


    case 'USA Today':
      return <a href="https://www.usatoday.com/" target="_blank"><img className="usa-today-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_1_120x40.png" /></a>;

    case 'Vice News':
      return <a href="https://news.vice.com/en_us" target="_blank"><img className="vice-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download_200x75.png" /></a>;

    case 'The Wall Street Journal':
      return <a href="https://www.wsj.com/" target="_blank"><img className="wsj-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/images-1_190x190.png" /></a>;

    case 'Thewrap.com':
      return <a href="https://www.thewrap.com/" target="_blank"><img className="the-wrap-icon" src="http://www.simpleimageresizer.com/_uploads/photos/df45efa6/download-4_90x70.png" /></a>;


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

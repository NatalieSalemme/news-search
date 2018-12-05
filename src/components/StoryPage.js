import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Menu from './Menu';
class StoryPage extends Component {

  render() {
    const { title, content, description, published, url, urlToImage } = this.props.selectedStory;
    return (
      <div className="story-page-container">
        <Menu />
        <h1 className="title-container">Title: {title}</h1>
        <img
          className="story-page-img"
          src={urlToImage}
          alt={title}/>
        <div>Published: {published}</div>
        <div className="content-container">Content: {content}</div>
        <div>Description: {description}</div>
        <Button
          basic color="teal"
          href={url}
          target="_blank"
          >Original Source</Button>

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

export default connect(mapStateToProps)(StoryPage);

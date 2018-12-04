import React from 'react';
import { connect } from 'react-redux';
import getStories from './Api';
import Menu from './Menu';

import {
  Card,
  Icon,
  Image,
  Grid } from 'semantic-ui-react';



const StoriesList = (props) => {
  function matchMe(str) {
    let regEx = /\d{4}\-\d{2}\-\d{2}/;
    let match = str.match(regEx)[0].split('-');
    let results = [match[1],match[2], match[0]].join('/');
    return results;
  }

  return (
    <div>
      <Menu />
      <h1>StoriesList</h1>
      <form
        onSubmit={(e) => props.onInputSubmit(e, props.inputText)}>
        <input
          className="search-input"
          value={props.inputText}
          onChange={props.onInputChange}/>
      </form>
      <Grid>
        {props.storiesList.map((story, index) => {
          return (
          <div
            style={{marginBottom: '1em'}}
            key={index}>
            <Card

              href={story.url}
              target="_blank">
              <Image
                className="story-thumbnail"
                src={story.urlToImage} />
              <Card.Content
                className="card-content">
                <Card.Header>{story.title}</Card.Header>
                <Card.Meta>
                  {matchMe(story.publishedAt)}
                </Card.Meta>
                <Card.Description>{story.description.length > 150 ?
                  story.description.split(' ').slice(0,20).join(' ') + '...' : story.description}</Card.Description>
              </Card.Content>
            </Card>
          </div>
          )
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storiesList: state.storiesList,
    inputText: state.inputText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      const action = {type: 'ON_INPUT_CHANGE',
      text: e.target.value };
      dispatch(action);
    },
    onInputSubmit: (e, query) => {
      e.preventDefault();
      getStories(dispatch, query);

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesList);

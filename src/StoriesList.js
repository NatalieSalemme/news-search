import React from 'react';
import { connect } from 'react-redux';
import getStories from './Api';
import { Card, Icon, Image } from 'semantic-ui-react';

function StoriesList(props) {
  return (
    <div>
      <h1>StoriesList</h1>
      <form
        onSubmit={(e) => props.onInputSubmit(e, props.inputText)}>
        <input
          value={props.inputText}
          onChange={props.onInputChange}/>

      </form>
      <ul>
        {props.storiesList.map((story) => {
          return (
          <div key={story.title.toString()}>


            <Card href={story.url} target="_blank">
              <Image src={story.urlToImage} />
              <Card.Content>
                <Card.Header>{story.title}</Card.Header>
                <Card.Description>{story.description}</Card.Description>
              </Card.Content>
            </Card>
          </div>
          )
        })}
      </ul>
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

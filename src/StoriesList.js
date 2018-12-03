import React from 'react';
import { connect } from 'react-redux';

const StoriesList = (props) => {
  return (
    <div>
      <h1>StoriesList</h1>
      <input onChange={props.onInputChange}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    stories: state.stories,
    inputText: state.inputText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      e.preventDefault();
      const action = {type: 'ON_INPUT_CHANGE',
      text: e.target.value };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesList);

import { createStore } from 'redux';

const initialState = {
  storiesList: [],
  inputText: '',
  selectedStory: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return Object.assign({}, state, { inputText: action.text });
    case 'ON_INPUT_SUBMIT':
    case 'ON_INITIAL_LOAD':
      return Object.assign({}, state, {
        storiesList: action.storiesList,
        inputText: '',
      });
    case 'ON_STORY_SELECT':
      return Object.assign({}, state, {selectedStory: action.selectedStory});
    default:

      return state;
  }

};
const store = createStore(reducer);
export default store;

import { createStore } from 'redux'

const initialState = {
  stories: [],
  inputText: ''
}

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch(action.type) {
    case 'ON_INPUT_CHANGE':
      return Object.assign({}, state, {inputText: action.text});
    break;
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;

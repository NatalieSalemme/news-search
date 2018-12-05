import axios from 'axios';

const testing = dispatch =>{
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=4b5432de54474b7d93433606ff8e126c`
    )
    .then(response => {
      dispatch({type: 'ON_INITIAL_LOAD', storiesList: response.data.articles
      });
    });

}

function getStories(dispatch, query) {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=4b5432de54474b7d93433606ff8e126c`
    )
    .then(response => {
      console.log('axios response', response);
      dispatch({
        type: 'ON_INPUT_SUBMIT',
        storiesList: response.data.articles
      });
    });
}

export default { getStories, testing };

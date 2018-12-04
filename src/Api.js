import axios from 'axios';

function getStories(dispatch, query) {
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=4b5432de54474b7d93433606ff8e126c`)
    .then((response) => {
      console.log('axios response', response);
      dispatch({type: 'ON_INPUT_SUBMIT', storiesList: response.data.articles })
    });
}

export default getStories;

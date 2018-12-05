import React, { Component } from 'react';
import './App.scss';
import store from './store/';
import StoriesList from './components/StoriesList';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (

      <div className="App">
        <Provider store={store}>
          <StoriesList />
        </Provider>

      </div>

    );
  }
}

export default App;

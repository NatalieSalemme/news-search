import React, { Component } from 'react';
import './App.css';
import store from './store/';
import StoriesList from './StoriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoriesList store={store} />
      </div>
    );
  }
}

export default App;

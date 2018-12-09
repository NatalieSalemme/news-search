import React, { Component } from 'react';
import './App.scss';
import StoriesList from './components/StoriesList';
import MainMenu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <StoriesList title="Trending News" queryText="trending" />
      </div>
    );
  }
}

export default App;

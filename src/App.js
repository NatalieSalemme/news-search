import React, { Component } from 'react';
import './App.scss';
import StoriesList from './components/StoriesList';
class App extends Component {

  render() {
    return (
      <div className="App">
          <StoriesList />
      </div>



    );
  }
}

export default App;

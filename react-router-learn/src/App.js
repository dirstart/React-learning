import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './component/Header';
import Main from './component/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;

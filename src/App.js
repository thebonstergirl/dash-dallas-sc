import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div className="App">
        <header className="App-header">
          <div className="App-logo" alt="logo" />
          <h1 className="App-title">Dash Dallas SC</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{router}</div>
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;

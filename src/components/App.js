import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Profile from  './Profile'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Profile}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

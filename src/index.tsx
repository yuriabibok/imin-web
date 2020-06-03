import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/rootReducer';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Upcoming from './components/pages/Upcoming/Upcoming';
import { Container } from '@material-ui/core';
import GamePage from './components/pages/GamePage/GamePage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Container maxWidth="lg">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={Upcoming} />
          <Route path='/game/:id' component={GamePage} />
        </Switch>
      </Router>
    </Provider>
  </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './redux/rootReducer';
import { Teams } from './components/Teams/Teams';
import { TeamDetails } from './components/Teams/TeamDetails';
import { Upcoming } from './components/Games/Upcoming';
import { GameDetails } from './components/Games/GameDetails';
import { withHeader } from './components/withHeader/withHeader';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/upcoming' />
        </Route>
        <Route path='/teams/:id' component={withHeader(TeamDetails)} />
        <Route path='/teams' component={withHeader(Teams)} />
        <Route path='/games/:id' component={withHeader(GameDetails)} />
        <Route path='/upcoming' component={withHeader(Upcoming)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

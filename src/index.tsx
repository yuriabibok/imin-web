import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './redux/rootReducer';
import { Teams } from './components/Teams/Teams';
import { TeamDetails } from './components/Teams/TeamDetails';
import { Upcoming } from './components/Games/Upcoming';
import { GameDetails } from './components/Games/GameDetails';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/teams/:id' component={TeamDetails} />
        <Route path='/teams' component={Teams} />
        <Route path='/games/:id' component={GameDetails} />
        <Route path='/upcoming' component={Upcoming} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

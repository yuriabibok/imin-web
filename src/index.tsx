import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import rootReducer from './redux/rootReducer';
import { Teams } from './components/Teams/Teams';
import { TeamDetails } from './components/Teams/TeamDetails';
import { UpcomingGames } from './components/Games/Upcoming';
import { GameDetails } from './components/Games/GameDetails';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { pages } from './resources/links';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/upcoming" />
        </Route>
        <Route path="/teams/:id" component={mainWrapper(TeamDetails)} />
        <Route path="/teams" component={mainWrapper(Teams, pages.teams)} />
        <Route path="/games/:id" component={mainWrapper(GameDetails)} />
        <Route
          path="/upcoming"
          component={mainWrapper(UpcomingGames, pages.upcoming)}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

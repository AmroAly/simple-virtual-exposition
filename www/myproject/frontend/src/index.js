import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import BookStand from './components/auth/book-stand';
import WorldMap from './components/world_map';
import EventHall from './components/event_hall';
import reducers from './reducers';
import async from './middlewares/async';
import AUTH_USER from './actions/types';

const createStoreWithMiddleware = applyMiddleware(async, reduxThunk)(createStore);
const store =createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={WorldMap} />
            <Route path="events/:id" component={EventHall}/>
            <Route path="book-stand/:id" component={BookStand} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));

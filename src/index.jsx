import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducer';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {TodoAppContainer} from './components/TodoApp';
import Foo from './components/Foo';
import App from './components/App';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer,  window.devToolsExtension && window.devToolsExtension());

store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        //<IndexRoute component={TodoAppContainer}/>
        <Route path="foo" component={Foo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

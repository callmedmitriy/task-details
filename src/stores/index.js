import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import linksListReducer from '../reducers/linksList';
import serviceInfoReducer from '../reducers/serviceInfo';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { searchLinksEpic, searchServiceEpic } from '../epics';

const reducer = combineReducers({
  linksList: linksListReducer,
  serviceInfo: serviceInfoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  searchLinksEpic,
  searchServiceEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;

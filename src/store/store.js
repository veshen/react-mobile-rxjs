import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import  rootEpic  from './epics';
import pingReducer from './reducers/pingpong'

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

export default store

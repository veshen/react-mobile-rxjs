import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import  rootEpic  from './epics';
import pingReducer from './reducers/pingpong'
import * as api from './../axios/index'
console.log(api)
const epicMiddleware = createEpicMiddleware({
  dependencies: { ...api }
});

const store = createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

export default store

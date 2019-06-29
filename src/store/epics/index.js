import { combineEpics } from 'redux-observable';
import {pingEpic,todolistEpic} from './ping';
// import {todolistEpic} from './todolist';

export default combineEpics(
  pingEpic,
  todolistEpic
);

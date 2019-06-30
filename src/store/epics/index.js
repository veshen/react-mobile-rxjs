import { combineEpics } from 'redux-observable';
import {pingEpic,todolistEpic} from './ping';
import {fetchTodolistEpic} from './todolist';

export default combineEpics(
  pingEpic,
  todolistEpic,
  fetchTodolistEpic
);

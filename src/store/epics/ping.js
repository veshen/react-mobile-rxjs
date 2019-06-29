import { delay, filter, mapTo, map, switchMap } from 'rxjs/operators';
// import { from } from 'rxjs';
import { getIndexList } from './../../axios/index';
export const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000),
    switchMap(()=>getIndexList()),
    map(x=>console.log(x)),
    mapTo({ type: 'PONG' })
);

export const todolistEpic = action$ => action$.pipe(
    filter(action => action.type === 'ADD_TODOLIST_ITEM'&&action.payload.text),
    delay(1000),
    // map(item => { return {...item.payload,type: 'ADD_TODOLIST_ITEM_RE'} }),
);

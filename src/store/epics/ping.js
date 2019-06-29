import { delay, filter, mapTo, map } from 'rxjs/operators';

export const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
);

export const todolistEpic = action$ => action$.pipe(
    filter(action => action.type === 'ADD_TODOLIST_ITEM'&&action.payload.text),
    delay(1000),
    map(item => { return {...item.payload,type: 'ADD_TODOLIST_ITEM_RE'} }),
);

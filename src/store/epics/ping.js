import { delay, filter, mapTo, map, switchMap } from 'rxjs/operators';
export const pingEpic = (action$,state$,api) => action$.pipe(
    filter(action => action.type === 'PING'),
    switchMap(()=>api.getIndexList()),
    map(x=>console.log(x)),
    mapTo({ type: 'PONG' })
);

export const todolistEpic = action$ => action$.pipe(
    filter(action => action.type === 'ADD_TODOLIST_ITEM'&&action.payload.text),
    map(item => { return {...item.payload,type: 'ADD_TODOLIST_ITEM_RE'} }),
);

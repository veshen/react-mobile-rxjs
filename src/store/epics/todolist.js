import { map, filter, switchMap, mapTo, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const fetchTodolistEpic = (action$,state$,api) => action$.pipe(
    ofType('FETCH_TODOLIST_DATA'),
    // mapTo({ type: 'PING' }),
    switchMap(()=>api.getTodoList()),
    catchError( error => console.log('error=====>',error) ),
    map(item => {
        console.log('item,state$.value.toDoList',api)
        return {type: 'ADD_FETCH_TODOLIST_ITEM',payload:item}
    })
    // mapTo({ type: 'PONG' })
);

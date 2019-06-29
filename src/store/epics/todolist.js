import { delay, filter, mapTo } from 'rxjs/operators';

export const todolistEpic = action$ => action$.pipe(
      // mapTo({ type: 'ADD_TODOLIST_ITEM_RE' })
    );

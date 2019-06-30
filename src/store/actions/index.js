export const ping = () => ({ type: 'PING' });
export const addTodoListItem = (text) => ({ type: 'ADD_TODOLIST_ITEM',payload : {text}});
export const fetchTodoList = () => ({ type: 'FETCH_TODOLIST_DATA' });

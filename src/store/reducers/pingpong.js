let defaultList = [
    {id: '0', text: '天气不错哦!!!', complete: false},
    {id: '1', text: '天气不错哦!!!', complete: false},
    {id: '2', text: '出去玩啊!!!', complete: true},
]

export default(state = { isPinging: false, toDoList : defaultList }, action) => {
  switch (action.type) {
    case 'PING':
      return { ...state, isPinging: true };
    case 'PONG':
      return { ...state, isPinging: false };
    case 'ADD_TODOLIST_ITEM_RE':
      return { ...state, toDoList : [...state.toDoList,{text:action.text,id:action.text+'a'}]};
    case 'ADD_FETCH_TODOLIST_ITEM':
        console.log(action)
      return { ...state, toDoList : [...state.toDoList,...action.payload]};
    default:
      return state;
  }
};

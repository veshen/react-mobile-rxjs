import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addTodoListItem} from '../actions'

const page = ({toDoList, addTodoListItem}) => {
    const [ text, setText ] = useState("");
    return(
        <div>
            <h1>Todo</h1>
            <div>
                <input type="text"  onChange={ e => setText(e.target.value)  }/>
                <button onClick={()=>addTodoListItem(text)}>Add</button>
            </div>
            <ul>
                {
                    toDoList.map((item,index)=><li key={index}>{item.text}</li>)
                }
            </ul>
        </div>
    )
}
export default connect(({toDoList}) => ({toDoList}), {addTodoListItem})(page);

import React, { FunctionComponent, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodoListItem, fetchTodoList } from '../store/actions'
import CSSModules from 'react-css-modules'
const styles = require('./App.css')
// componentDidMount ===> useEffect(()=>{},[])

interface ListItem {
  id: string
  text: string
  complete: boolean
}
// interface IState {
//   toDoList: [ListItem]
// }

const Page: FunctionComponent<{
  toDoList: [ListItem]
  addTodoListItem: (text: string) => void
  fetchTodoList: () => void
}> = ({ toDoList, addTodoListItem, fetchTodoList }) => {
  const [text, setText] = useState('')
  console.log(toDoList)
  useEffect(() => {
    console.log('works')
    fetchTodoList()
    return () => {
      //清理函数 在下次调用时执行
      console.log('cleaning up..')
      console.log('conponent did update..')
    }
  }, [])
  useEffect(() => {
    return () => {
      console.log('conponent did unmount..')
    }
  }, [])
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" onChange={e => setText(e.target.value)} />
        <button onClick={() => addTodoListItem(text)}>Add</button>
        <button onClick={() => fetchTodoList()}>fetch todolist</button>
      </div>
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { addTodoListItem, fetchTodoList }
)(
  React.memo(CSSModules(Page, styles), (prevProps, nextProps) => {
    console.log('shouldCompnentUpdate...')
    return false
  })
)

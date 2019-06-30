import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './components/App'
import Todo from './components/Todolist'

const routes = (
  <Switch>
    <Route path="/" exact={true} component={Main} />
    <Route path="/todo" component={Todo} />
  </Switch>
)

export default routes

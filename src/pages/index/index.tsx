import React from 'react'
import { connect } from 'react-redux'
import { ping } from './../../store/actions'
import CSSModules from 'react-css-modules'
const styles = require('./index.css')

interface IProps {
  isPinging: () => boolean
  ping: () => void
}
const App = ({ isPinging, ping }: IProps) => {
  return (
    <div>
      <h1 styleName="title-h1">isPinging: {isPinging.toString()}</h1>
      <button onClick={ping}>start ping</button>
    </div>
  )
}

export default connect(
  isPinging => isPinging,
  { ping }
)(CSSModules(App, styles))

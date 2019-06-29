import React from 'react';
import {connect} from 'react-redux';
import {ping} from './../../store/actions'
import CSSModules from 'react-css-modules';
var styles = require('./index.css');


let App = ({isPinging, ping}) => (<div>
    <h1 styleName="title-h1">isPinging:{isPinging.toString()}</h1>
    <button onClick={ping}>start ping</button>
</div>)

export default connect(({isPinging}:any) => ({isPinging}), {ping})(CSSModules(App,styles));

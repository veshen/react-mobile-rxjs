import React from 'react';
import CSSModules from 'react-css-modules';
var styles = require('./App.css');


const App: React.FC = () => {
  return (
    <div styleName="App">
     123
    </div>
  );
}

export default CSSModules(App, styles);

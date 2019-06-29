import React from 'react';
import {connect} from 'react-redux';
import {ping} from './../store/actions'
import CSSModules from 'react-css-modules';
import styles from './App.css';
// function Example() {
//     const [count, setCount] = useState(66);
//     // 类似于componentDidMount 和 componentDidUpdate:
//     useEffect(
//         () => {
//             // 更新文档的标题
//             document.title = `You clicked ${count} times`;
//         },
//         [count] // 当count发生变化时执行副作用函数
//     );
//     return (
//         <div>
//             <p>You clicked {count}times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
let App = ({isPinging, ping}) => (<div>
    <h1 styleName="title-h1">isPinging:{isPinging.toString()}</h1>
    <button onClick={ping}>start ping</button>
</div>)

export default connect(({isPinging}) => ({isPinging}), {ping})(CSSModules(App,styles));

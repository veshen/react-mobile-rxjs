import React from 'react';
import {connect} from 'react-redux';
import {ping} from '../store/actions'
import CSSModules from 'react-css-modules';
const styles = require('./App.css')

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

// let App = ({isPinging, ping}) => (<div>
//     <h1 styleName="title-h1">isPinging:{isPinging.toString()}</h1>
//     <button onClick={ping}>start ping</button>
// </div>)



const App = ({ isPinging, ping }: IProps) => {
  return (
    <div>
      <h1 styleName="title-h1">isPinging: {isPinging.toString()}</h1>
      <button onClick={ping}>start ping</button>
    </div>
  )
}
interface TypeOfState {
    isPinging: boolean
}
interface TypeOfDispatch {
    ping: () => void
}
const mapStateToProps = (state:TypeOfState) => ({
    isPinging : state.isPinging
});

//将action的方法绑定到props上
const mapDispatchToProps = (dispatch: Function) => {
    return {
        ping : () => dispatch(ping()),
    }
};

// @connect<TypeOfState, TypeOfDispatch>(
//     mapStateToProps,
//     mapDispatchToProps
// )

interface IProps {
  isPinging: boolean
  ping: () => void
}

// @(connect(mapStateToProps, mapDispatchToProps) as any)
// class App extends React.Component<IProps , any > {
//   constructor(props: IProps) {
//     super(props)
//     this.state =  {}
//   }
//   public render () {
//     const { isPinging, ping } = this.props
//     return (
//       <div>
//         {/*<h1 styleName="title-h1">isPinging: {isPinging.toString()}</h1>
//         <button onClick={ping}>start ping</button>*/}
//       </div>
//     )
//   }
// }

export default connect(isPinging => isPinging, {ping})(CSSModules(App,styles));
// export default CSSModules(App, styles)

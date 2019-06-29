import React, { useState, useEffect } from 'react';
const Example = () => {
    const [count, setCount] = useState(66);

    // 类似于componentDidMount 和 componentDidUpdate:
    useEffect(
        () => {
            // 更新文档的标题
            document.title = `You clicked ${count} times`;
        },
        [count] // 当count发生变化时执行副作用函数
    );
    return (
        <div>
            <p>You clicked {count}times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default Example;

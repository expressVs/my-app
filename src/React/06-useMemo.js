import React, { useState, useMemo } from 'react';

function getCount (count) {

    console.log('执行昂贵的计算');

    console.time('计算耗时');

    let result = 0;
    for (let i = 0; i < count * 1000000000; i++) {
        result += i;
    }
    console.timeEnd('计算耗时');
    return result;
}

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    console.log('ExampleComponent render');

    // const expensiveCalculation = getCount(count);

    const expensiveCalculation = useMemo(() => {
        console.log('执行昂贵的计算');

        console.time('计算耗时');

        let result = 0;
        for (let i = 0; i < count * 100000000; i++) {
            result += i;
        }
        console.timeEnd('计算耗时');
        return result;
    }, [count]);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const dec = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p>Expensive Calculation: {expensiveCalculation}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>加加+++</button>
            {count}
            <ExampleComponent />
        </div>
    ); 
}

export default App;
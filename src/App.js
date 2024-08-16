import React, { useState, useMemo, useCallback } from 'react';

function Bpp(props) {

  const { click } = props

  console.log('bpp 执行')

  return (
    <h1 onClick={click}>bpp</h1>
  )
}

// 将组件进行渲染优化
// const BppMemo = React.memo(Bpp)

function App() {
  const [count, setCount] = useState(0);

  // console.log('app 执行')

  
  // function click () {
  //   alert(1)
  // }

  // let data = {}

  let data = useMemo(() => {
    return {}
  }, [])

  const click = useCallback(() => {
    alert(1)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>加加+++</button>
      {count}
      {/* 对click 和 data 进行缓存 需结合React.memo() */}
      <Bpp click={click} data={data} />
    </div>
  );
}

export default App;
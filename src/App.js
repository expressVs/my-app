import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState(0) // [0, function(){}
  const [name, setName] = useState(() => {
    return '张三'
  }) // ['张三', function(){}

  useEffect(() => {
    console.log('空的useEffect')
  })

  // 第一个参数回调函数：组件初始化执行，组件更新之后会执行（dom更新完成）
  useEffect(() => {
    // console.log('name发生了变化', count)
    // return () => {
    //   console.log('组件卸载')
    // }
  },[name])

  useEffect(() => {
    // console.log('count发生了变化', count)
    // return () => {
    //   console.log('组件卸载')
    // }
  },[count])

  useEffect(() => {
    // console.log('count或name发生了变化', count)
    // return () => {
    //   console.log('组件卸载')
    // }
  },[count, name])


  function btn_click() {
    setCount((count) => {
      return count + 1
    })
    // count是几？
    // console.log(count)
  }

  function btn_click2() {
    setName('李四')
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={btn_click}>点我+1</button>
      <button onClick={btn_click2}>点我修改名字</button>
    </div>
  )
}

export default App;

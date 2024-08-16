import { useEffect, useState } from 'react';

import './App.css';


function Bpp(){
  const [show, setShow] = useState(true)

  const btn_click = ()=>{
    setShow(!show)
  }
  return (
    <div>
      {show && <App />}
      <button onClick={btn_click}>点我切换</button>
    </div>
  )
}

function App() {

  const [count, setCount] = useState(0) // [0, function(){}
  const [name, setName] = useState(() => {
    return '张三'
  }) // ['张三', function(){}

  useEffect(() => {
    console.log('useEffect 组件执行', count)
    
    return () => {
      // 1. 组件卸载的时候，执行
      // 2. 依赖项状态发送变化的时候，执行
      // 作用：用于卸载
      console.log('effect返回函数的执行', count);
      
    }
  }, [count])


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

export default Bpp;

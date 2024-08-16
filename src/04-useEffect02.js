import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState(0) // [0, function(){}
  // const [name, setName] = useState('张三') // [0, function(){}
  const [name, setName] = useState(()=>{
    return '张三'
  }) // 可以是函数，返回一个值

  useEffect(() => {
    console.log('useEffect执行')

    return () => {
      console.log('useEffect卸载')
    }
  }, [])

  function btn_click() {
    setCount((count)=>{
      console.log(count);
      return count + 1
    })
    console.log(count);
    
  }
  function btn_click2() {
    setName('李四')
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <button onClick={btn_click}> +1 </button>
      <button onClick={btn_click2}> 修改名字 </button>
    </div>
  )
}

export default App;

import { useEffect} from 'react';


function App() {

  //  第一个参数是回调函数，组件初始化执行, 组件更新后会执行(dom更新完成)
  //  第二个参数是依赖项数组
  useEffect(() => {
    console.log('useEffect执行');

    // 会有一个返回值
    return () => {
      console.log('组件卸载');
    }
  },[])

  return(
    <div>
      <h1>React Hooks</h1>
    </div>
  )
}

export default App;
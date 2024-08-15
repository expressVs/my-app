import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'初始化',
      money:100
    }
  }

  // 静态方法，组件将要更新的时候执行
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps组件将要更新');
    return null
  }

  getSnapshotBeforeUpdate(preProps,preState){
    console.log('getSnapshotBeforeUpdate组件执行');
    return {
      snapshot:'我是一个快照'
    }
  }

  componentDidUpdate(preProps,preState, snapshot){
    console.log('preProps',preProps);
    console.log('preState',preState);
    console.log('snapshot',snapshot);
    console.log('componentDidUpdate 页面更新之后执行');
  }

  // 组件挂载完成之后执行
  componentDidMount(){
    console.log('componentDidMount组件挂载完成');
  }
  click = ()=>{
    this.setState({
      name:'修改后的变量'
    })
  }
  render() {
    console.log('render组件渲染');
    const {name} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.click}>修改变量</button>
      </div>
    )
  }
}

export default App;

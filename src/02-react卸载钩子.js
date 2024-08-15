import React from 'react';
import './App.css';


class Bpp extends React.Component {
  componentWillUnmount(){
    console.log('组件将要卸载');
  }
  render(){
    return(
      <div>
        <h1>我是Bpp组件</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Bpp_show:true,
      money:100
    }
  }


  click = ()=>{
    this.setState({
      Bpp_show: false
    })
  }
  render() {
    console.log('render组件渲染');
    return (
      <div>
        {
          this.state.Bpp_show && <Bpp />
        }
        <button onClick={this.click}>修改变量</button>
      </div>
    )
  }
}

export default App;

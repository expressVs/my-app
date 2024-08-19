import React, { useState, createContext, useContext } from 'react';

  
const MyContext = createContext(null)

function Bpp(props){

  const data = useContext(MyContext)
  const click = ()=>{
    data.setName('Bpp修改后的Name')
  }

  return(
    <div>
      <Cpp />
      <button onClick={click}>Bpp修改</button>
    </div>
  )
}

function Cpp(props){
  const data = useContext(MyContext)  

  console.log('data', data);
  

  return(
    <div>
      <h2>{data.name}</h2>
    </div>
  )
}



function App() {



  const [name, setName] = useState('我是App传来的Name')

  return(
    <MyContext.Provider value={
      {
        name,
        setName
      }
    }>
      <div>
        <Bpp />
      </div>
    </MyContext.Provider>
  )
}

export default App;
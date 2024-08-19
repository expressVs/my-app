import React, { useState, createContext, useContext, useDebugValue, useEffect } from 'react';

function Bpp() {
  useDebugValue('xxxx', 'xxxxx')

  return (
    <h1>
      bpp
    </h1>
  )

}

function App () {


  const [count, setCount] = useState(0);

  console.log('count', count)
  useDebugValue(count)

  return (
    <h1>
      app use debug value
    </h1>
  )
}

export default App;
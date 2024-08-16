import React, { useRef, useEffect, forwardRef } from 'react';

// 转发ref
const Bppref = forwardRef(function Bpp (props, ref) {
  return (
    // ref={ref} 放在哪儿 转发哪个dom实例
    <div ref={ref}>
      <input type="text" />
    </div>
  );
})


function Example() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('inputRef', inputRef)

    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Bppref ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default Example
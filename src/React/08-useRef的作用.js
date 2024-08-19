import React, { useRef, useEffect, forwardRef } from 'react';

const Bppref = forwardRef(function Bpp (props, ref) {
  return (
    <div ref={ref}>
      <input  type="text" />
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
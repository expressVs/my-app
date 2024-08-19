import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    console.log('inputRef inputRef', inputRef);
  },[])

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
});

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log('app拿到的ref', inputRef);
  },[])

  const focusInput = () => {
    inputRef.current.focusInput();
  };

  const getValue = () => {
    const value = inputRef.current.getValue();
    console.log(value);
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>Focus Custom Input</button>
      <button onClick={getValue}>Get Value</button>
    </div>
  );
}
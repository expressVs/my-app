import React, { useState, createContext, useContext, useDebugValue, useEffect, useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  console.log('passwordHintId', passwordHintId)


  return (
    <>
      <label>
        密码:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        密码应该包含至少 18 个字符
      </p>
    </>
  );
}

function App() {

  // const id = useId()

  // console.log('id', id)


  return (
    <div>
      <h2>输入密码</h2>
      <PasswordField />
      <h2>确认密码</h2>
      <PasswordField />
    </div>
  )
}

export default App;
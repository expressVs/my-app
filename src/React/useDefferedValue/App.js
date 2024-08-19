import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList.js';

export default function App() {
  const [text, setText] = useState('');

  // deferred
  // 把这个状态引起的渲染，变成低优先级的任务
  const deferredText = useDeferredValue(text)

//   console.log('text',text)
//   console.log('deferredText',deferredText)

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}

import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer.js';

export default function Tooltip({ children, targetRect }) {
    // console.log('xxxxxxxxxx')
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);


//   console.log('tooltipHeight', tooltipHeight)
  // 人为地减慢了渲染
  let now = performance.now();
  while (performance.now() - now < 100) {
    // 不做任何事情...
  }

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();

    console.log('effect height', height)
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
//   console.log('targetRect', targetRect)
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;

    console.log('tooltipY', tooltipY)

    if (tooltipY < 0) {
      // 它不适合上方，因此把它放在下面。
      tooltipY = targetRect.bottom;

      console.log('render tooltipY', tooltipY)
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}

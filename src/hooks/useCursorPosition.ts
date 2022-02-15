import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

type CursorPosition = { x: number; y: number };

export default function useCursorPosition(throttleWait = 16): CursorPosition {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = throttle((event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    }, throttleWait);
    document.addEventListener('mousemove', updateMousePosition);
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return cursorPosition;
}
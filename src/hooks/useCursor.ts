import { useEffect, useCallback, Ref } from 'react';
import throttle from 'lodash/throttle';
import { useCursorContext } from '../context/cursor';
import { DEFAULT_CURSOR_TYPE } from '../constants';

interface Options {
  cursorTypeOnEnter: string;
  cursorTypeOnLeave?: string;
}

export function useCursor(
  target: Ref<HTMLElement>,
  options: Options = {
    cursorTypeOnEnter: DEFAULT_CURSOR_TYPE,
    cursorTypeOnLeave: DEFAULT_CURSOR_TYPE,
  }
) {
  const cursorContext = useCursorContext();
  const { cursorType, onCursorTypeChange } = cursorContext;
  const onMouseEnter = useCallback(
    throttle(() => {
      const newCursorType = options.cursorTypeOnEnter;
      if (cursorType !== newCursorType) {
        onCursorTypeChange(newCursorType);
      }
    }, 8),
    [options.cursorTypeOnEnter, cursorType]
  );

  const onMouseLeave = useCallback(
    throttle(() => {
      const newCursorType = options.cursorTypeOnLeave || DEFAULT_CURSOR_TYPE;
      if (cursorType !== newCursorType) {
        onCursorTypeChange(newCursorType);
      }
    }, 8),
    [options.cursorTypeOnLeave, cursorType]
  );

  useEffect(() => {
    if (!target) {
      return;
    }
    // get the element
    const theTarget = target.current; // ref
    theTarget.addEventListener('mouseenter', onMouseEnter);
    theTarget.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (theTarget) {
        theTarget.removeEventListener('mouseenter', onMouseEnter);
        theTarget.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [target, onMouseEnter, onMouseLeave]);
}

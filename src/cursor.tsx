import cls from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useCursorContext } from './context/cursor';
import useMousePosition from './hooks/useCursorPosition';
import { VARIANTS } from './constants';

export default function Cursor({ variants }: { variants: Record<string, any> }) {
  const cursorPosition = useMousePosition();
  const cursorContext = useCursorContext();

  const { cursorType } = cursorContext;
  const allVariants = {
    ...VARIANTS,
    ...variants,
  }
  const { classNames, style = {} } = allVariants[cursorType] || {};
  const mainClass = cls(
    'fixed pointer-events-none z-999',
    classNames
  );

  // * Animation
  // const controls = useAnimation();
  // const transition = { type: 'spring', stiffness: 100 };

  // const backgroundVariants = {
  //   default: {
  //     height: '2rem',
  //     width: '2rem',
  //     opacity: 1,
  //     backgroundColor: 'yellow',
  //     transition: {
  //       ...transition,
  //     },
  //   },
  //   headerLinkHovered: {
  //     backgroundColor: 'green',
  //     transition: { type: 'spring', stiffness: 100 },
  //   },
  //   workCardHover: {
  //     backgroundColor: 'red',
  //     height: '4rem',
  //     width: '4rem',
  //     transition: {
  //       ...transition,
  //     },
  //   },
  // };

  // controls.start(cursorType || 'default');

  return (
    <div
      // animate={controls}
      // variants={backgroundVariants}
      // initial="initial"
      className={mainClass}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        ...style
      }}
    />
  );
}

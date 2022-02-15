import React, { useRef } from 'react';
import createCursor from 'magic-cursor';

const CUSTOM_VARIANTS = {
  headerLinkHovered: {
    classNames: 'bg-pink-400 w-6 h-7 duration-200',
    // backgroundColor: 'green',
    // transition: { type: 'spring', stiffness: 100 },
  },
  workCardHover: {
    classNames: 'duration-300 bg-indigo-500 w-3 h-3',
  },
};

const { CursorProvider, useCursor } = createCursor(CUSTOM_VARIANTS);

function Div() {
  const divRef = useRef(null);
  useCursor(divRef, {
    cursorTypeOnEnter: 'headerLinkHovered',
  });

  return (
    <div ref={divRef} className="mb-10 bg-cyan-100">
      Demo Basic
    </div>
  );
}

function Card() {
  const cardRef = useRef('card');
  useCursor(cardRef, {
    cursorTypeOnEnter: 'workCardHover',
  });

  return (
    <div
      ref={cardRef}
      className="border-2 border-gray-200 rounded-lg shadow-lg mb-10"
    >
      Card
    </div>
  );
}

export default () => {
  return (
    <CursorProvider>
      <Div />
      <Card />
    </CursorProvider>
  );
};

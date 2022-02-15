import React, { useState, createContext, FC, useContext } from 'react';
import Cursor from '../cursor';
import { useCursor } from '../hooks/useCursor';

interface ICursorContextType {
  cursorType: string;
  onCursorTypeChange: (cursorType: string) => void;
}

export const CursorContext = createContext<ICursorContextType>({
  cursorType: 'default',
  onCursorTypeChange: () => {},
});

const createCursor = (customVariants: Record<string, any>) => {
  const CursorProvider: FC = ({ children }) => {
    const [cursorType, setCursorType] = useState<string>('default');

    const value = {
      cursorType,
      onCursorTypeChange: (type: string) => {
        setCursorType(type);
      },
    };

    return (
      <CursorContext.Provider value={value}>
        <Cursor variants={customVariants} />
        {children}
      </CursorContext.Provider>
    );
  };

  return { CursorProvider, useCursor };
};

export default createCursor;

export const useCursorContext = () => useContext(CursorContext);

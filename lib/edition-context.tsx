'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { editions, getDefaultEdition, type Edition } from './content.config';

interface EditionContextType {
  currentEdition: Edition;
  setEditionByYear: (year: number) => void;
  availableEditions: Edition[];
}

const EditionContext = createContext<EditionContextType | undefined>(undefined);

export function EditionProvider({ children }: { children: ReactNode }) {
  const [currentEdition, setCurrentEdition] = useState<Edition>(getDefaultEdition());

  const setEditionByYear = useCallback((year: number) => {
    const edition = editions.find((e) => e.year === year);
    if (edition) {
      setCurrentEdition(edition);
    }
  }, []);

  return (
    <EditionContext.Provider
      value={{
        currentEdition,
        setEditionByYear,
        availableEditions: editions,
      }}
    >
      {children}
    </EditionContext.Provider>
  );
}

export function useEdition() {
  const context = useContext(EditionContext);
  if (context === undefined) {
    throw new Error('useEdition must be used within an EditionProvider');
  }
  return context;
}

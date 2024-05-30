import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({} as any);

export const useAppContext = () => useContext(AppContext);

// TODO(Balaji): Add Types
const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [animations, setAnimations] = useState<string[]>([]);
  const [animationIndex, setAnimationIndex] = useState<number | null>(null);
  const value = {
    animations,
    animationIndex,
    setAnimations,
    setAnimationIndex,
  } as any;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

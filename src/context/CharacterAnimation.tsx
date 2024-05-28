import React, { createContext, useContext, useState } from 'react';

const CharacterContext = createContext({} as any);

export const useCharacter = () => useContext(CharacterContext);

const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [animations, setAnimations] = useState<string[]>([]);
  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const value = {
    animations,
    animationIndex,
    setAnimations,
    setAnimationIndex,
  } as any;

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;

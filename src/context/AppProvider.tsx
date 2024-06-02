import React, { createContext, useContext, useMemo, useState } from 'react';

import AppProviderType, {
  IAppProviderProps,
} from 'src/models/context/AppProvider.type';

const AppContext = createContext({} as AppProviderType);

export const useAppContext = () => useContext(AppContext);

const AppProvider: React.FC<IAppProviderProps> = ({
  children,
}): JSX.Element => {
  const [animations, setAnimations] = useState<string[]>([]);
  const [animationIndex, setAnimationIndex] = useState<number | null>(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState<number | null>(
    null,
  );
  const [arMode, setARMode] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [selectedHotSpot, setSelectedHotSpot] = useState<number | null>(null);
  const [exitView, setExitView] = useState<boolean>(false);

  const value = useMemo(() => {
    return {
      animations,
      animationIndex,
      selectedEnvironment,
      arMode,
      selectedFeature,
      selectedHotSpot,
      exitView,
      setAnimations,
      setAnimationIndex,
      setSelectedEnvironment,
      setARMode,
      setSelectedFeature,
      setSelectedHotSpot,
      setExitView,
    } as AppProviderType;
  }, [
    animations,
    animationIndex,
    selectedEnvironment,
    arMode,
    selectedFeature,
    selectedHotSpot,
    exitView,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

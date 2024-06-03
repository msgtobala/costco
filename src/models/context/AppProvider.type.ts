import { Dispatch, SetStateAction } from 'react';

interface AppProviderType {
  animations: string[];
  animationIndex: number | null;
  selectedEnvironment: number | null;
  arMode: boolean;
  selectedFeature: number | null;
  selectedHotSpot: number | null;
  exitView: boolean;
  showPanels: boolean;
  setAnimations: Dispatch<SetStateAction<string[]>>;
  setAnimationIndex: Dispatch<SetStateAction<number | null>>;
  setSelectedEnvironment: Dispatch<SetStateAction<number | null>>;
  setARMode: Dispatch<SetStateAction<boolean>>;
  setSelectedFeature: Dispatch<SetStateAction<number | null>>;
  setSelectedHotSpot: Dispatch<SetStateAction<number | null>>;
  setExitView: Dispatch<SetStateAction<boolean>>;
  setShowPanels: Dispatch<SetStateAction<boolean>>;
}

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default AppProviderType;

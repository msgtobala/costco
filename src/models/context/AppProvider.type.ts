import { Dispatch, SetStateAction } from 'react';
import { AnimationAction } from 'three';

interface AppProviderType {
  animations: string[];
  animationIndex: number | null;
  selectedEnvironment: number | null;
  arMode: boolean;
  selectedFeature: number | null;
  selectedHotSpot: number | null;
  exitView: boolean;
  showPanels: boolean;
  rightDoorOpen: boolean;
  leftDoorOpen: boolean;
  freezerOpen: boolean;
  animationActions: { [x: string]: AnimationAction | null };
  setAnimations: Dispatch<SetStateAction<string[]>>;
  setAnimationIndex: Dispatch<SetStateAction<number | null>>;
  setSelectedEnvironment: Dispatch<SetStateAction<number | null>>;
  setARMode: Dispatch<SetStateAction<boolean>>;
  setSelectedFeature: Dispatch<SetStateAction<number | null>>;
  setSelectedHotSpot: Dispatch<SetStateAction<number | null>>;
  setExitView: Dispatch<SetStateAction<boolean>>;
  setShowPanels: Dispatch<SetStateAction<boolean>>;
  setAnimationActions: Dispatch<
    SetStateAction<{ [x: string]: AnimationAction | null }>
  >;
  setRightDoorOpen: Dispatch<SetStateAction<boolean>>;
  setLeftDoorOpen: Dispatch<SetStateAction<boolean>>;
  setFreezerOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default AppProviderType;

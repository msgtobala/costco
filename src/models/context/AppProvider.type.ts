import { Dispatch, SetStateAction } from 'react';

interface AppProviderType {
  animations: string[];
  animationIndex: number | null;
  selectedEnvironment: number | null;
  arMode: boolean;
  setAnimations: Dispatch<SetStateAction<string[]>>;
  setAnimationIndex: Dispatch<SetStateAction<number | null>>;
  setSelectedEnvironment: Dispatch<SetStateAction<number | null>>;
  setARMode: Dispatch<SetStateAction<boolean>>;
}

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default AppProviderType;

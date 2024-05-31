import { Dispatch, SetStateAction } from 'react';

interface AppProviderType {
  animations: string[];
  animationIndex: number | null;
  setAnimations: Dispatch<SetStateAction<string[]>>;
  setAnimationIndex: Dispatch<SetStateAction<number | null>>;
}

export interface IAppProviderProps {
  children: React.ReactNode;
}

export default AppProviderType;

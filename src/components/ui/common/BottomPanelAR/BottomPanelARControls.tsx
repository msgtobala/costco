import React from 'react';
import { BottomPanelsARControlsWrapper } from './BottomPanelAR.style';

const BottomPanelsARControls: React.FC<{
  animations: string[];
  onButtonClicked: (index: number) => void;
}> = ({ animations, onButtonClicked }): JSX.Element => {
  return (
    <BottomPanelsARControlsWrapper>
      {/* {animations.map((name: string) => (
        <p>{name}</p>
      ))} */}
      <p onClick={() => onButtonClicked(1)}>Open doors</p>
      <p onClick={() => onButtonClicked(0)}>Close doors</p>
    </BottomPanelsARControlsWrapper>
  );
};

export default BottomPanelsARControls;

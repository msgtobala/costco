import React from 'react';
import { BottomPanelsARControlsWrapper } from './BottomPanelAR.style';

const BottomPanelsARControls: React.FC<{
  animations: string[];
  onButtonClicked: (index: number) => void;
}> = ({ animations, onButtonClicked }): JSX.Element => {
  console.log(animations);
  return (
    <BottomPanelsARControlsWrapper>
      {/* {animations.map((name: string) => (
        <p>{name}</p>
      ))} */}
      <button onClick={() => onButtonClicked(1)}>Open doors</button>
      <button onClick={() => onButtonClicked(0)}>Close doors</button>
    </BottomPanelsARControlsWrapper>
  );
};

export default BottomPanelsARControls;

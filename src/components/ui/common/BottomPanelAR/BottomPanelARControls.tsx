import React from 'react';
import { BottomPanelsARControlsWrapper } from './BottomPanelAR.style';

const BottomPanelsARControls: React.FC<{
  animations?: string[];
  onButtonClicked: (index: number) => void;
}> = ({ onButtonClicked }): JSX.Element => {
  return (
    <BottomPanelsARControlsWrapper>
      <button onClick={() => onButtonClicked(1)}>Open doors</button>
      <button onClick={() => onButtonClicked(0)}>Close doors</button>
    </BottomPanelsARControlsWrapper>
  );
};

export default BottomPanelsARControls;

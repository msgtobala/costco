import React from 'react';
import { BottomPanelsARControlsWrapper } from './BottomPanelAR.style';
import ReactSlider from '../ReactSlider/ReactSlider';

const BottomPanelsARControls: React.FC<{
  animations?: string[];
  onButtonClicked: (index: number) => void;
}> = ({ onButtonClicked }): JSX.Element => {
  return (
    <BottomPanelsARControlsWrapper>
      <ReactSlider slidesToScroll={1} slidesToShow={3}>
        <button onClick={() => onButtonClicked(1)}>Open doors</button>
        <button onClick={() => onButtonClicked(0)}>Close doors</button>
        <button onClick={() => onButtonClicked(3)}>Open Freezer</button>
        <button onClick={() => onButtonClicked(2)}>Close Freezer</button>
      </ReactSlider>
    </BottomPanelsARControlsWrapper>
  );
};

export default BottomPanelsARControls;

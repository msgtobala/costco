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
        <span onClick={() => onButtonClicked(1)}>Open doors</span>
        <span onClick={() => onButtonClicked(0)}>Close doors</span>
        <span onClick={() => onButtonClicked(3)}>Open Freezer</span>
        <span onClick={() => onButtonClicked(2)}>Close Freezer</span>
      </ReactSlider>
    </BottomPanelsARControlsWrapper>
  );
};

export default BottomPanelsARControls;

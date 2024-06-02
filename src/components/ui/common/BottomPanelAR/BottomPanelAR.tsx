import React from 'react';

import Cart from 'src/components/ui/common/Cart/Cart';
import {
  BottomPanelARWrapper,
  BottomPanelWrapper,
} from 'src/components/ui/common/BottomPanelAR/BottomPanelAR.style';
import BottomPanelsARControls from './BottomPanelARControls';
import { useAppContext } from 'src/context/AppProvider';

const BottomPanelAR: React.FC<{ overlayContentRef?: any }> = (
  props,
): JSX.Element => {
  const { animations, setAnimationIndex } = useAppContext();
  const { overlayContentRef } = props;

  const onButtonClicked = (index: number) => {
    setAnimationIndex(index);
  };

  return (
    <BottomPanelARWrapper ref={overlayContentRef}>
      <BottomPanelWrapper $showPanels>
        <BottomPanelsARControls
          animations={animations}
          onButtonClicked={onButtonClicked}
        />
        <div style={{ transform: 'translateY(-8px)' }}>
          <Cart />
        </div>
      </BottomPanelWrapper>
    </BottomPanelARWrapper>
  );
};

export default BottomPanelAR;

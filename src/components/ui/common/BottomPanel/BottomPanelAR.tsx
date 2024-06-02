import React from 'react';

import TabSwitcher from 'src/components/ui/common/TabSwitcher/TabSwitcher';
import Cart from 'src/components/ui/common/Cart/Cart';
import { BottomPanelWrapper } from 'src/components/ui/common/BottomPanel/BottomPanel.style';

const BottomPanelAR: React.FC<{ overlayContentRef?: any }> = (
  props,
): JSX.Element => {
  const { overlayContentRef } = props;
  return (
    <BottomPanelWrapper $showPanels ref={overlayContentRef}>
      <TabSwitcher />
      <Cart />
    </BottomPanelWrapper>
  );
};

export default BottomPanelAR;

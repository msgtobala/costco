import React from 'react';

import TabSwitcher from 'src/components/ui/common/TabSwitcher/TabSwitcher';
import Cart from 'src/components/ui/common/Cart/Cart';
import { BottomPanelWrapper } from 'src/components/ui/common/BottomPanel/BottomPanel.style';
import { useAppContext } from 'src/context/AppProvider';

const BottomPanel: React.FC<{ overlayContentRef?: any }> = (
  props,
): JSX.Element => {
  const { overlayContentRef } = props;
  const { showPanels } = useAppContext();

  return (
    <BottomPanelWrapper $showPanels={showPanels} ref={overlayContentRef}>
      <TabSwitcher />
      <Cart />
    </BottomPanelWrapper>
  );
};

export default BottomPanel;

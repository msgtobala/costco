import React from 'react';

import TabSwitcher from 'src/components/ui/common/TabSwitcher/TabSwitcher';
import Cart from 'src/components/ui/common/Cart/Cart';
import BottomPanelWrapper from 'src/components/ui/common/BottomPanel/BottomPanel.style';

const BottomPanel: React.FC = (): JSX.Element => {
  return (
    <BottomPanelWrapper $showPanels>
      <TabSwitcher />
      <Cart />
    </BottomPanelWrapper>
  );
};

export default BottomPanel;

import React, { useState } from 'react';

import About from 'src/components/ui/common/TabSwitcher/TabContent/About';
import Features from 'src/components/ui/common/TabSwitcher/TabContent/Features';
import {
  TabSwitcherStyled,
  TabStyled,
} from 'src/components/ui/common/TabSwitcher/TabSwitcher.styled';

const TabSwitcher: React.FC = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('about');

  const getTabContent = () => {
    switch (selectedTab) {
      case 'about':
        return <About />;
      case 'features':
        return <Features />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <TabSwitcherStyled>
        <TabStyled
          onClick={() => setSelectedTab('about')}
          $isActive={selectedTab === 'about'}
        >
          <span>ABOUT</span>
        </TabStyled>
        <TabStyled
          onClick={() => setSelectedTab('features')}
          $isActive={selectedTab === 'features'}
        >
          <span>FEATURES</span>
        </TabStyled>
      </TabSwitcherStyled>
      {getTabContent()}
    </>
  );
};

export default TabSwitcher;

import React, { useState } from 'react';

import About from 'src/components/ui/common/TabSwitcher/TabContent/About';
import Features from 'src/components/ui/common/TabSwitcher/TabContent/Features';
import {
  TabSwitcherStyled,
  TabStyled,
} from 'src/components/ui/common/TabSwitcher/TabSwitcher.styled';
import { useAppContext } from 'src/context/AppProvider';
import Interactions from './TabContent/Interactions';

const TabSwitcher: React.FC = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('about');
  const { setExitView } = useAppContext();

  const getTabContent = () => {
    switch (selectedTab) {
      case 'about':
        return <About />;
      case 'features':
        return <Features />;
      case 'interactions':
        return <Interactions />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <TabSwitcherStyled>
        <TabStyled
          onClick={() => {
            setExitView(true);
            setSelectedTab('about');
          }}
          $isActive={selectedTab === 'about'}
        >
          <span>ABOUT</span>
        </TabStyled>
        <TabStyled
          onClick={() => {
            setExitView(false);
            setSelectedTab('features');
          }}
          $isActive={selectedTab === 'features'}
        >
          <span>FEATURES</span>
        </TabStyled>
        <TabStyled
          onClick={() => {
            setExitView(false);
            setSelectedTab('interactions');
          }}
          $isActive={selectedTab === 'interactions'}
        >
          <span>INTERACTIONS</span>
        </TabStyled>
      </TabSwitcherStyled>
      {getTabContent()}
    </>
  );
};

export default TabSwitcher;

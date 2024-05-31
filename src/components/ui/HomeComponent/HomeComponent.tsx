import React from 'react';

import Header from 'src/components/ui/common/Header/Header';

import SidePanel from 'src/components/ui/common/SidePanel/SidePanel';
import BottomPanel from 'src/components/ui/common/BottomPanel/BottomPanel';
import CustomCanvas from 'src/components/three/CustomCanvas/CustomCanvas';
import {
  CanvasWrapper,
  HomeComponentWrapper,
} from 'src/components/ui/HomeComponent/HomeComponent.style';

const HomeComponent: React.FC = (): JSX.Element => {
  return (
    <HomeComponentWrapper>
      <Header />
      <CanvasWrapper>
        <CustomCanvas />
      </CanvasWrapper>
      <SidePanel />
      <BottomPanel />
    </HomeComponentWrapper>
  );
};

export default HomeComponent;

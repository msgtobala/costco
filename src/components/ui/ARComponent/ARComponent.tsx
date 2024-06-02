import React from 'react';

import ARCanvas from 'src/components/three/ARCanvas/ARCanvas';
import {
  CanvasWrapper,
  HomeComponentWrapper,
} from '../HomeComponent/HomeComponent.style';
import Header from '../common/Header/Header';
import SidePanel from '../common/SidePanel/SidePanel';

const ARComponent: React.FC = (): JSX.Element => {
  return (
    <HomeComponentWrapper>
      <Header />
      <CanvasWrapper>
        <ARCanvas />
      </CanvasWrapper>
      <SidePanel />
    </HomeComponentWrapper>
  );
};

export default ARComponent;

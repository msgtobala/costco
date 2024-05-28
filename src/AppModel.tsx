import React from 'react';

import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import MainThreeModal from './components/three/MainThreeModal';
import 'src/App.css';

const AppModel: React.FC = (): JSX.Element => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ['hit-test'],
        }}
      />
      <Canvas>
        <XR>
          <MainThreeModal />
        </XR>
      </Canvas>
    </>
  );
};

export default AppModel;

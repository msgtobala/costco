import React from 'react';

import { Canvas } from '@react-three/fiber';

import 'src/App.css';
import { ARButton, XR } from '@react-three/xr';
import MainThreeXR from './components/three/MainThreeXR';

const AppHit: React.FC = () => {
  return (
    <>
      <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} />
      <Canvas>
        <XR>
          <MainThreeXR />
        </XR>
      </Canvas>
    </>
  );
};

export default AppHit;

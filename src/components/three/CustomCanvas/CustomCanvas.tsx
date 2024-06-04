import React from 'react';

import { Canvas } from '@react-three/fiber';

import Scene from 'src/components/three/CustomCanvas/Scene';

const CustomCanvas: React.FC = (): JSX.Element => {
  return (
    <Canvas shadows>
      <Scene />
    </Canvas>
  );
};

export default CustomCanvas;

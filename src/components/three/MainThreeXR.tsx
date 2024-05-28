import React, { useEffect, useRef, useState } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Matrix4, Vector3 } from 'three';
import {
  Interactive,
  useHitTest,
  useXR,
  XRInteractionEvent,
} from '@react-three/xr';
import Cube from './Cube';
import { useThree } from '@react-three/fiber';

const MainThreeXR: React.FC = (): JSX.Element => {
  const [cubePosition, setCubePosition] = useState<Vector3 | null>(null);
  const reticleRef = useRef<any>();
  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      console.log(camera.position);
        camera.position.z = 5;
    }
  });

  useHitTest((hitMatrix: Matrix4, _hit: XRHitTestResult) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale,
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  useEffect(() => {
    if (!isPresenting) {
      setCubePosition(null);
    }
  }, [isPresenting]);

  const placeCube = (e: XRInteractionEvent) => {
    const position = e.intersection?.object.position.clone();
    if (position) {
      setCubePosition(position);
    }
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting && cubePosition && <Cube position={cubePosition} />}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Cube />}
    </>
  );
};

export default MainThreeXR;

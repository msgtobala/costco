import React, { useEffect, useRef, useState } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Camera, Matrix4, Vector3 } from 'three';
import {
  Interactive,
  useHitTest,
  useXR,
  XRInteractionEvent,
} from '@react-three/xr';
import { useThree } from '@react-three/fiber';
import Model from './Model';

const MainThreeAnimation: React.FC = (): JSX.Element => {
  const [modelPosition, setModelPosition] = useState<Vector3 | null>(null);
  const reticleRef = useRef<any>();
  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      //   console.log(camera.position.x, camera.position.y, camera.position.z);
      // camera.position.x = 0;
      // camera.position.y = 0;
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
      setModelPosition(null);
    }
  }, [isPresenting]);

  const placeCube = (e: XRInteractionEvent) => {
    const position = e.intersection?.object.position.clone();
    if (position) {
      setModelPosition(position);
    }
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting && modelPosition && <Model position={modelPosition} />}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Model />}
    </>
  );
};

export default MainThreeAnimation;

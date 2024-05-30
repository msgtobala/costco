import React, { useRef, useState } from 'react';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Matrix4, Vector3 } from 'three';
import {
  Interactive,
  useHitTest,
  useXR,
  XRInteractionEvent,
} from '@react-three/xr';

import ARModel from 'src/components/three/ARCanvas/ARModel';

const ARScene: React.FC = (): JSX.Element => {
  const [modelPosition, setModelPosition] = useState<Vector3 | null>(null);
  const reticleRef = useRef<any>();
  const orbitRef = useRef<any>();
  const cameraRef = useRef<any>();
  const { isPresenting } = useXR();

  useHitTest((hitMatrix: Matrix4, _hit: XRHitTestResult) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale,
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e: XRInteractionEvent) => {
    const position = e.intersection?.object.position.clone();
    if (position) {
      setModelPosition(position);
    }
  };

  return (
    <>
      <OrbitControls ref={orbitRef} target={[0, 1.8, 0]} />
      <ambientLight intensity={10} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 2.93, 10.3]}
      />
      {isPresenting && modelPosition && (
        <ARModel position={modelPosition} key="ar-model" />
      )}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && (
        <ARModel position={new Vector3(0, 0, 0)} key="interaction-model" />
      )}
    </>
  );
};

export default ARScene;

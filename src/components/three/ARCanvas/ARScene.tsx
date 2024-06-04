import React, { useEffect, useRef, useState } from 'react';

import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import {
  Matrix4,
  Vector3,
  PerspectiveCamera as PerspectiveCameraImpl,
  Mesh,
} from 'three';
import {
  Interactive,
  useHitTest,
  useXR,
  XRInteractionEvent,
} from '@react-three/xr';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import ARModel from 'src/components/three/ARCanvas/ARModel';
import CustomEnvironment from 'src/components/three/Environment';
import { useAppContext } from 'src/context/AppProvider';

const ARScene: React.FC = (): JSX.Element => {
  const [modelPosition, setModelPosition] = useState<Vector3 | null>(null);
  const [showPresentation, setShowPresentation] = useState(false);
  const reticleRef = useRef<Mesh>(null);
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);
  const { setARMode } = useAppContext();
  const { isPresenting } = useXR();

  useEffect(() => {
    setARMode(isPresenting);
    setShowPresentation(isPresenting);
  }, [isPresenting]);

  useHitTest((hitMatrix: Matrix4) => {
    if (reticleRef.current) {
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale,
      );
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
  });

  const placeModel = (e: XRInteractionEvent) => {
    const position = e.intersection?.object.position.clone();
    if (position) {
      setModelPosition(position);
    }
  };

  return (
    <>
      <OrbitControls
        ref={orbitRef}
        target={[0.1, 0.83, 0.31]}
        minDistance={0.1}
        maxDistance={20}
        minAzimuthAngle={0}
        minPolarAngle={0}
        maxPolarAngle={1.57}
        enablePan
        enableDamping
      />
      <CustomEnvironment />
      <ContactShadows smooth opacity={0.8} />
      {showPresentation && modelPosition && (
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
      {!showPresentation && (
        <ARModel position={new Vector3(0, 0, 0)} key="interaction-model" />
      )}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-0.62, 1.57, 4.52]}
      />
    </>
  );
};

export default ARScene;

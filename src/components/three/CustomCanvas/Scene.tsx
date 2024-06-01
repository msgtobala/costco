import React, { Suspense, useRef } from 'react';

import { PerspectiveCamera as PerspectiveCameraImpl } from 'three';
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import CustomLoader from 'src/components/ui/common/CustomLoader/CustomLoader';
import Model from 'src/components/three/CustomCanvas/Model';

const Scene: React.FC = (): JSX.Element => {
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);

  return (
    <>
      <OrbitControls
        ref={orbitRef}
        target={[0, 1.8, 0]}
        enablePan
        enableDamping
      />
      <Suspense fallback={<CustomLoader />}>
        <Model />
      </Suspense>
      {/* <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
        position={[0, -0.1, 0]}
      >
        <circleGeometry args={[20, 20]} />
        <meshStandardMaterial color={new Color(0xffffff)} />
      </mesh> */}
      {/* <spotLight castShadow position={[2, 5, 5]} intensity={20} angle={1.2} /> */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        shadow-mapSize={1024}
        castShadow
      />
      {/* <directionalLight
        position={[-5, 5, 5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[0, 5, 0]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      /> */}
      {/* <AccumulativeShadows
        frames={100}
        alphaTest={0.85}
        opacity={0.75}
        scale={30}
        position={[0, -1.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={2.5}
          ambient={0.5}
          intensity={1}
          position={direction}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      {/* <Environment preset="city" /> */}
      <ContactShadows smooth opacity={0.8} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-9.5, 2.83, 9.4]}
      />
    </>
  );
};

export default Scene;

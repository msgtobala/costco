import React, { Suspense, useEffect, useRef } from 'react';

import { PerspectiveCamera as PerspectiveCameraImpl } from 'three';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import CustomLoader from 'src/components/ui/common/CustomLoader/CustomLoader';
import Model from 'src/components/three/CustomCanvas/Model';
import environment from 'src/resources/environment';
import { useAppContext } from 'src/context/AppProvider';
import CustomEnvironment from 'src/components/three/Environment';
import useHotSpot from 'src/hooks/useHotspot';
import { useThree } from '@react-three/fiber';

const Scene: React.FC = (): JSX.Element => {
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);
  const { selectedEnvironment } = useAppContext();
  const { camera } = useThree();

  useHotSpot(cameraRef, orbitRef, camera);

  useEffect(() => {}, []);

  return (
    <>
      <OrbitControls
        ref={orbitRef}
        target={[0.1, 0.83, 0.31]}
        // target={[0.09, 0.84, 0.31]}
        // target={[0.04, 0.85, 0.3]}
        // target={[0.3, 2.3, 0]}
        minDistance={0.1}
        maxDistance={20}
        minAzimuthAngle={0}
        minPolarAngle={0}
        maxPolarAngle={1.57}
        enablePan
        enableDamping
      />
      <Suspense fallback={<CustomLoader />}>
        <Model />
      </Suspense>
      {selectedEnvironment !== null && selectedEnvironment >= 0 && (
        <Environment
        files={environment[selectedEnvironment]}
          background
          ground={{
            height: 7,
            radius: 10,
            scale: 100,
          }}
        />
      )}
      <CustomEnvironment />
      <ContactShadows smooth opacity={0.8} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-0.62, 1.57, 4.52]}
        // position={[-0.77, 1.55, 4.74]}
        // position={[0.12, 1.86, 4.76]}
        // position={[-6.76, 3.53, 11.47]}
      />
    </>
  );
};

export default Scene;

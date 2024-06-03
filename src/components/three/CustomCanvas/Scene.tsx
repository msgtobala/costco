import React, { Suspense, useRef } from 'react';

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

  return (
    <>
      <OrbitControls
        ref={orbitRef}
        target={[0.13, 0.5, 0.4]}
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
        position={[-0.76, 1.36, 4.81]}
        // position={[-6.76, 3.53, 11.47]}
      />
    </>
  );
};

export default Scene;

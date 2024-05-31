import React, { Suspense, useRef } from 'react';

import { PerspectiveCamera as PerspectiveCameraImpl } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

import CustomLoader from 'src/components/ui/common/CustomLoader/CustomLoader';
import Model from 'src/components/three/CustomCanvas/Model';

const Scene: React.FC = (): JSX.Element => {
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const cameraRef = useRef<PerspectiveCameraImpl>(null);

  return (
    <>
      <OrbitControls ref={orbitRef} target={[0, 1.8, 0]} enablePan />
      <ambientLight intensity={10} />
      <Suspense fallback={<CustomLoader />}>
        <Model />
      </Suspense>
      {/* <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 2.35, 13.37]}
      /> */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-9.5, 2.83, 9.4]}
      />
    </>
  );
};

export default Scene;

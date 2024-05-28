import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Cube: React.FC<{ position?: Vector3 }> = (props: {
  position?: Vector3;
}): JSX.Element => {
  const cubeRef = useRef<any>();
  const { position } = props;

  useFrame((_state, delta) => {
    cubeRef.current.rotation.x += delta * 3;
  });

  return (
    <>
      <mesh ref={cubeRef} position={position ?? new Vector3(0, 0, 0)}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default Cube;

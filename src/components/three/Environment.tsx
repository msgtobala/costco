import React from 'react';

import { Color } from 'three';
import { Environment } from '@react-three/drei';

const CustomEnvironment: React.FC = (): JSX.Element => {
  return (
    <Environment>
      <mesh position={[0, 2.5, 5]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(15)} />
      </mesh>
      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
      <mesh position={[5, 2.5, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
      <mesh position={[-5, 2.5, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
      <mesh position={[0, 2.5, 5]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
      <mesh position={[0, 9, 2]} rotation={[21, 0, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
      <mesh position={[-2.5, 2.5, -0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshBasicMaterial color={new Color(0xff).setScalar(10)} />
      </mesh>
    </Environment>
  );
};

export default CustomEnvironment;

import React, { useEffect, useRef, useState } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Matrix4, Vector3 } from 'three';
import {
  Interactive,
  useHitTest,
  useXR,
  XRInteractionEvent,
} from '@react-three/xr';
import { invalidate, useThree } from '@react-three/fiber';
import Model from './Model';

const MainThreeModal: React.FC = (): JSX.Element => {
  const [modelPosition, setModelPosition] = useState<Vector3 | null>(null);
  const reticleRef = useRef<any>();
  const orbitRef = useRef<any>();
  const { isPresenting, player } = useXR();
  const { camera, controls } = useThree();

  useThree(({ camera }) => {
    if (!isPresenting) {
      // console.log(camera.position.x, camera.position.y, camera.position.z);
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

  // useEffect(() => {
  //   if (!isPresenting) {
  //     camera.position.set(0, 0, 5);
  //     camera.updateProjectionMatrix();
  //     setModelPosition(new Vector3(0, 0, 0));
  //     if (orbitRef.current) {
  //       orbitRef.current.target.set(0, 0, 0);
  //       orbitRef.current.update();
  //     }
  //   }
  // }, [isPresenting, camera]);

  useEffect(() => {
    if (isPresenting) {
      console.log('Entering AR mode');
    } else {
      console.log('Exiting AR mode');
      // camera.position.set(0, 0, 5);
      // camera.lookAt(0, 0, 0);
      // camera.updateProjectionMatrix();
      // invalidate();
      // console.log('Camera position reset to:', camera.position);
      // setModelPosition(new Vector3(0, 0, 0));
    }
  }, [isPresenting, camera]);

  useEffect(() => {
    if (!isPresenting) {
      setModelPosition(new Vector3(0, 0, 0));
      camera.rotation.set(0, 0, 0);
      camera.position.set(0, 1.5, 5); // Set the desired camera position
      camera.rotation.set(0, 0, 0); // Reset the camera rotation
      orbitRef.current.target.set(0, 0, 0); // Reset the target to the center of the scene
      orbitRef.current.update();
      camera.updateProjectionMatrix();
      invalidate();
    }
  }, [isPresenting, camera]);

  const placeCube = (e: XRInteractionEvent) => {
    const position = e.intersection?.object.position.clone();
    if (position) {
      setModelPosition(position);
    }
  };

  return (
    <>
      <OrbitControls ref={orbitRef} />
      <ambientLight />
      {/* {isPresenting && modelPosition && (
        <Model position={modelPosition} key="ar-model" />
      )} */}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      <Model
        position={
          isPresenting && modelPosition ? modelPosition : new Vector3(0, 0, 0)
        }
        key={isPresenting ? 'ar-model' : 'interaction-model'}
        scale={1} // Set the desired scale value
      />
      {/* {!isPresenting && (
        <Model position={new Vector3(0, 0, 0)} key="interaction-model" />
      )} */}
    </>
  );
};

export default MainThreeModal;

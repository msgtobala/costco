import * as Tween from '@tweenjs/tween.js';

import { Vector3 } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { Camera } from '@react-three/fiber';

export enum TweenAnimationProperties {
  CAMERA = 'camera',
  LOOKAT = 'lookAt',
  ORBIT = 'orbit',
}

export interface CameraTweenAnimationControls {
  camera: Camera;
  cameraPosition: Vector3;
  targetPosition: Vector3;
  properties: Array<TweenAnimationProperties>;
  duration?: number;
  targetLookAt?: Vector3;
  orbitControls?: OrbitControlsImpl;
  onStart?: (startObj?: Vector3) => void;
  onUpdate?: (updateObj?: Vector3) => void;
  onComplete?: (completeObj?: Vector3) => void;
}

export const tweenAnimateCamera = (controls: CameraTweenAnimationControls) => {
  const {
    camera,
    cameraPosition,
    targetPosition,
    targetLookAt,
    properties,
    duration,
    orbitControls,
    onStart,
    onUpdate,
    onComplete,
  } = controls;
  const animation = new Tween.Tween(cameraPosition)
    .to(targetPosition, duration || 1500)
    .onStart((tweenStartObj) => onStart?.(tweenStartObj))
    .onUpdate((tweenUpdateObj) => {
      const { x: cameraX, y: cameraY, z: cameraZ } = tweenUpdateObj;
      const {
        x: lookAtX = 0,
        y: lookAtY = 0,
        z: lookAtZ = 0,
      } = targetLookAt || {};

      if (properties.includes(TweenAnimationProperties.CAMERA)) {
        camera.position.set(cameraX, cameraY, cameraZ);
      }

      if (properties.includes(TweenAnimationProperties.LOOKAT)) {
        camera.lookAt(lookAtX, lookAtY, lookAtZ);
      }

      if (
        properties.includes(TweenAnimationProperties.ORBIT) &&
        orbitControls
      ) {
        orbitControls.target.set(lookAtX, lookAtY, lookAtZ);
        orbitControls.update();
      }

      onUpdate?.(tweenUpdateObj);
    })
    .onComplete((tweenCompleteObj) => onComplete?.(tweenCompleteObj))
    .start();

  return animation;
};

export const tweenUpdate = () => {
  Tween.update();
};

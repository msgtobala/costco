import { RefObject, useEffect, useState } from 'react';

import { Camera, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Vector3 } from 'three';
import type { OrbitControls } from 'three-stdlib';
import { useAppContext } from 'src/context/AppProvider';
import {
  tweenAnimateCamera,
  TweenAnimationProperties,
  tweenUpdate,
} from 'src/utils/tween';
import toVector, { PositionVector } from 'src/utils/toVector';

const useHotSpot = (
  cameraRef: RefObject<PerspectiveCamera | undefined>,
  controlsRef: RefObject<OrbitControls>,
  threeCamera: Camera,
) => {
  const { selectedFeature, exitView, setSelectedFeature, setSelectedHotSpot } =
    useAppContext();

  const [initialTargetPosition, setInitialTargetPosition] =
    useState<PositionVector>();
  const [initialTargetLookAt, setInitialTargetLookAt] =
    useState<PositionVector>();

  useFrame(() => {
    if (selectedFeature !== null || exitView) {
      tweenUpdate();
    }
  });

  const setCurrentPositions = (
    currentPosition: Vector3,
    currentTarget: Vector3,
  ) => {
    const { x: positionX, y: positionY, z: positionZ } = currentPosition;
    const { x: targetX, y: targetY, z: targetZ } = currentTarget;

    const position: PositionVector = {
      x: positionX,
      y: positionY,
      z: positionZ,
    };
    const target: PositionVector = { x: targetX, y: targetY, z: targetZ };
    setInitialTargetPosition(position);
    setInitialTargetLookAt(target);
  };

  const animateHotSpot = (
    targetPosition: PositionVector,
    targetLookAt: PositionVector,
    index: number | null,
  ) => {
    if (cameraRef?.current?.position && threeCamera && controlsRef.current) {
      tweenAnimateCamera({
        camera: threeCamera,
        cameraPosition: cameraRef?.current?.position,
        targetPosition: toVector(targetPosition),
        properties: [
          TweenAnimationProperties.CAMERA,
          TweenAnimationProperties.LOOKAT,
          TweenAnimationProperties.ORBIT,
        ],
        duration: 1500,
        targetLookAt: toVector(targetLookAt),
        orbitControls: controlsRef.current,
        onStart: () => {
          setSelectedHotSpot(null);
          controlsRef!.current!.enabled = true;
        },
        onComplete: () => {
          controlsRef!.current!.enabled = false;
          setSelectedFeature(null);
          setSelectedHotSpot(index);
        },
      });
    }
  };

  useEffect(() => {
    if (exitView) {
      if (initialTargetPosition && initialTargetLookAt) {
        animateHotSpot(initialTargetPosition, initialTargetLookAt, null);
      }
    }
  }, [exitView]);

  useEffect(() => {
    if (selectedFeature !== null) {
      if (selectedFeature === 0) {
        if (cameraRef.current && controlsRef.current) {
          setCurrentPositions(
            cameraRef.current.position,
            controlsRef.current.target,
          );
        }
        const targetPosition = {
          x: -4.7297644063785,
          y: 6.193574284726669,
          z: 4.993966997579989,
        } as PositionVector;
        const targetLookAt = {
          x: -0.21879935410496032,
          y: 4.505940507227479,
          z: -0.5026646701594244,
        } as PositionVector;
        animateHotSpot(targetPosition, targetLookAt, 0);
      }

      if (selectedFeature === 1) {
        const targetPosition = {
          x: 4.67111511009628,
          y: 3.7541151360785228,
          z: 12.346735803727574,
        };
        const targetLookAt = {
          x: -1.0478027384414645,
          y: 2.6500552031528173,
          z: 0.1404902586724124,
        };
        animateHotSpot(targetPosition, targetLookAt, 1);
      }
    }
  }, [selectedFeature]);

  return {};
};

export default useHotSpot;

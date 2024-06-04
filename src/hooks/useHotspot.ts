import { RefObject, useEffect, useState } from 'react';

import { Camera, useFrame } from '@react-three/fiber';
import { AnimationAction, LoopOnce, PerspectiveCamera, Vector3 } from 'three';
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
  const {
    selectedFeature,
    exitView,
    animationActions,
    setSelectedFeature,
    setSelectedHotSpot,
  } = useAppContext();

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
    if (selectedFeature === 0) {
      const closedoorR = animationActions['closedoorR'] as AnimationAction;
      closedoorR.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
      closedoorR.clampWhenFinished = true;
    } else if (selectedFeature === 1) {
      const doorcloseL = animationActions['doorcloseL'] as AnimationAction;
      doorcloseL.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
      doorcloseL.clampWhenFinished = true;
    } else if (selectedFeature === 2) {
      console.log(selectedFeature);
      const freezerclose = animationActions['freezerclose'] as AnimationAction;
      freezerclose.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
      freezerclose.clampWhenFinished = true;
    }
    if (cameraRef.current && controlsRef.current) {
      setCurrentPositions(
        cameraRef.current.position,
        controlsRef.current.target,
      );
    }
  }, []);

  useEffect(() => {
    if (selectedFeature !== null) {
      if (selectedFeature === 0) {
        const targetPosition = {
          x: -0.27,
          y: 2.48,
          z: 1.07,
        } as PositionVector;
        const targetLookAt = {
          x: -0.08,
          y: 0.64,
          z: 0.603,
        } as PositionVector;
        animateHotSpot(targetPosition, targetLookAt, 0);
      }

      if (selectedFeature === 1) {
        const targetPosition = {
          x: -0.11,
          y: 1.09,
          z: 1.83,
        };
        const targetLookAt = {
          x: 0.02,
          y: 0.77,
          z: 0.32,
        };
        animateHotSpot(targetPosition, targetLookAt, 1);
      }

      if (selectedFeature === 2) {
        const targetPosition = {
          x: -0.17,
          y: 1.5,
          z: 1.15,
        };
        const targetLookAt = {
          x: -0.19,
          y: 1.32,
          z: 0.19,
        };
        animateHotSpot(targetPosition, targetLookAt, 2);
      }

      if (selectedFeature === 3) {
        const targetPosition = {
          x: -0.77,
          y: 1.32,
          z: 1.55,
        };
        const targetLookAt = {
          x: 0.48,
          y: 1.18,
          z: 0.52,
        };
        animateHotSpot(targetPosition, targetLookAt, 3);
      }
    }
  }, [selectedFeature]);

  return {};
};

export default useHotSpot;

// if (selectedFeature === 0) {
//   const closedoorR = animationActions['closedoorR'] as AnimationAction;
//   closedoorR.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
//   closedoorR.clampWhenFinished = true;
// } else if (selectedFeature === 1) {
//   const doorcloseL = animationActions['doorcloseL'] as AnimationAction;
//   doorcloseL.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
//   doorcloseL.clampWhenFinished = true;
// } else if (selectedFeature === 2) {
//   console.log(selectedFeature);
//   const freezerclose = animationActions['freezerclose'] as AnimationAction;
//   freezerclose.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
//   freezerclose.clampWhenFinished = true;
// }

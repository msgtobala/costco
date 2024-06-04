import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';

import { useAppContext } from 'src/context/AppProvider';
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  LoopOnce,
} from 'three';

const useModelAnimations = (props: {
  mixer: AnimationMixer;
  animations: AnimationClip[];
}) => {
  const { mixer } = props;
  const { animationIndex, animationActions } = useAppContext();

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    if (Object.keys(animationActions).length > 0) {
      // const closedoorR = animationActions['closedoorR'] as AnimationAction;
      // const doorcloseL = animationActions['doorcloseL'] as AnimationAction;
      // const freezerclose = animationActions['freezerclose'] as AnimationAction;
      // closedoorR.reset().setLoop(LoopOnce, 1).halt(3.3).play();
      // doorcloseL.reset().setLoop(LoopOnce, 1).halt(3.3).play();
      // freezerclose.reset().setLoop(LoopOnce, 1).halt(3.3).play();
      // // closedoorR.clampWhenFinished = true;
      // // doorcloseL.clampWhenFinished = true;
      // // freezerclose.clampWhenFinished = true;
    }
  }, [animationActions]);

  mixer.addEventListener('finished', () => {
    console.log('fin');
  });

  useEffect(() => {
    if (animationIndex !== null) {
      // close door
      if (animationIndex === 0) {
        const closedoorR = animationActions['closedoorR'] as AnimationAction;
        const doorcloseL = animationActions['doorcloseL'] as AnimationAction;
        closedoorR.clampWhenFinished = false;
        doorcloseL.clampWhenFinished = false;
        closedoorR.reset().setLoop(LoopOnce, 1).play();
        doorcloseL.reset().setLoop(LoopOnce, 1).play();
        closedoorR.clampWhenFinished = true;
        doorcloseL.clampWhenFinished = true;
      }

      // open door
      if (animationIndex === 1) {
        mixer.stopAllAction();
        const opendoorR = animationActions['opendoorR'] as AnimationAction;
        const opendoorL = animationActions['opendoorL'] as AnimationAction;
        opendoorR.reset().setLoop(LoopOnce, 1).play();
        opendoorL.reset().setLoop(LoopOnce, 1).play();
        opendoorL.clampWhenFinished = true;
        opendoorR.clampWhenFinished = true;
      }

      // close freezer
      if (animationIndex === 2) {
        const freezerclose = animationActions[
          'freezerclose'
        ] as AnimationAction;
        freezerclose.reset().setLoop(LoopOnce, 1).play();
        freezerclose.clampWhenFinished = true;
      }

      // open freezer
      if (animationIndex === 3) {
        const freezeropen = animationActions['freezeropen'] as AnimationAction;
        freezeropen.reset().setLoop(LoopOnce, 1).play();
        freezeropen.clampWhenFinished = true;
      }
    }
  }, [animationIndex]);
};

export default useModelAnimations;

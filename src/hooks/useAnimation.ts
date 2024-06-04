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
  names: string[];
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

  useEffect(() => {
    if (animationIndex !== null) {
      mixer.stopAllAction();
      // open door
      if (animationIndex === 1) {
        const opendoorR = animationActions['opendoorR'] as AnimationAction;
        const opendoorL = animationActions['opendoorL'] as AnimationAction;
        opendoorR.time = 0;
        opendoorL.time = 0;
        opendoorR.setDuration(5);
        opendoorL.setDuration(5);
        opendoorR.reset().halt(1.7).setLoop(LoopOnce, 1).play();
        opendoorL.reset().halt(1.7).setLoop(LoopOnce, 1).play();
      }
      if (animationIndex === 0) {
        const closedoorR = animationActions['opendoorR'] as AnimationAction;
        const closedoorL = animationActions['opendoorL'] as AnimationAction;
        closedoorR.time = 1;
        closedoorL.time = 1;
        closedoorR.setDuration(5);
        closedoorL.setDuration(5);
        closedoorR.setLoop(LoopOnce, 1).play();
        closedoorL.setLoop(LoopOnce, 1).play();
      }

      if (animationIndex === 3) {
        const freezeropen = animationActions['freezeropen'] as AnimationAction;
        freezeropen.time = 0;
        freezeropen.setDuration(5);
        freezeropen.halt(1.7).setLoop(LoopOnce, 1).play();
      }

      if (animationIndex === 2) {
        const freezeropen = animationActions['freezeropen'] as AnimationAction;
        freezeropen.time = 1;
        freezeropen.setDuration(5);
        freezeropen.setLoop(LoopOnce, 1).play();
      }
    }
  }, [animationIndex]);
};

export default useModelAnimations;

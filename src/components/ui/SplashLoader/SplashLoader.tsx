import React from 'react';

import { useProgress } from '@react-three/drei';

import {
  SplashContainer,
  SplashLoaderWrapper,
} from 'src/components/ui/SplashLoader/SplashLoader.style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SplashLoader: React.FC = (): JSX.Element => {
  const { progress } = useProgress();

  return (
    <SplashContainer $progress={progress}>
      <SplashLoaderWrapper>
        <CircularProgressbar
          value={progress}
          text={`${progress.toFixed(0)}%`}
          strokeWidth={2}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(0, 93, 164, ${progress / 100})`,
            textColor: '#005DA4',
          })}
        />
      </SplashLoaderWrapper>
    </SplashContainer>
  );
};

export default SplashLoader;

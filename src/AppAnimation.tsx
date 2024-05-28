import React, { useEffect, useRef, useState } from 'react';

import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import MainThreeModal from './components/three/MainThreeModal';
import 'src/App.css';
import CharacterProvider from './context/CharacterAnimation';
import Interface from './components/three/Interface';

const AppAnimation: React.FC = (): JSX.Element => {
  const overlayContent = useRef<any>(null);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    // console.log(document.querySelector('#overlay-content') as HTMLElement);
    if (overlayContent.current) {
      setContent(overlayContent.current);
    }
  }, []);

  return (
    <>
      <CharacterProvider>
        <ARButton
          sessionInit={{
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['dom-overlay'],
            domOverlay: {
              //   root: overlayContent.current as HTMLElement,
              root: content as HTMLElement,
            },
          }}
          className="ar-button"
        />
        <Canvas>
          <XR>
            <MainThreeModal />
          </XR>
        </Canvas>
        <Interface overlayContentRef={overlayContent} />
      </CharacterProvider>
    </>
  );
};

export default AppAnimation;

import React, { useEffect, useRef, useState } from 'react';

import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

import ARScene from 'src/components/three/ARCanvas/ARScene';
import AppProvider from 'src/context/AppProvider';
import ARControls from 'src/components/ui/ARControls/ARControls';

const ARCanvas: React.FC = (): JSX.Element => {
  const overlayContent = useRef<any>(null);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (overlayContent.current) {
      setContent(overlayContent.current);
    }
  }, []);

  return (
    <>
      <AppProvider>
        <ARButton
          sessionInit={{
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['dom-overlay'],
            domOverlay: {
              root: content as HTMLElement,
            },
          }}
          className="ar-button"
        />
        <Canvas>
          <XR>
            <ARScene />
          </XR>
        </Canvas>
        <ARControls overlayContentRef={overlayContent} />
      </AppProvider>
    </>
  );
};

export default ARCanvas;

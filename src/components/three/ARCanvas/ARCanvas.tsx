import React, { useEffect, useRef, useState } from 'react';

import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

import ARScene from 'src/components/three/ARCanvas/ARScene';
import ARControls from 'src/components/ui/ARControls/ARControls';
import BottomPanel from 'src/components/ui/common/BottomPanel/BottomPanel';
import { useAppContext } from 'src/context/AppProvider';
// import BottomPanel from 'src/components/ui/common/BottomPanel/BottomPanel';

const ARCanvas: React.FC = (): JSX.Element => {
  const overlayContent = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<HTMLElement | null>(null);
  const { arMode, setARMode } = useAppContext();

  useEffect(() => {
    if (overlayContent.current && arMode) {
      setContent(overlayContent.current);
    }
  }, [arMode]);

  const enableARMode = () => {
    setARMode(true);
  };
 
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ['hit-test'],
          optionalFeatures: ['dom-overlay'],
          domOverlay: {
            root: content as HTMLElement,
          },
        }}
        // onClick={enableARMode}
        className="ar-button"
      />
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <XR>
          <ARScene />
        </XR>
      </Canvas>
      <div style={{ visibility: 'hidden' }}>
        <ARControls overlayContentRef={overlayContent} />
      </div>
      {/* {arMode ? <BottomPanel overlayContentRef={overlayContent} /> : <p>Hai</p>} */}
    </>
  );
};

export default ARCanvas;

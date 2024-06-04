import React, { useEffect, useRef, useState } from 'react';

import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

import ARScene from 'src/components/three/ARCanvas/ARScene';
// import { useAppContext } from 'src/context/AppProvider';
// import BottomPanelAR from 'src/components/ui/common/BottomPanelAR/BottomPanelAR';
// import BottomPanel from 'src/components/ui/common/BottomPanel/BottomPanel';

const ARCanvas: React.FC = (): JSX.Element => {
  const overlayContent = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<HTMLElement | null>(null);
  // const { arMode } = useAppContext();

  useEffect(() => {
    if (overlayContent.current) {
      setContent(overlayContent.current);
    }
  }, []);

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
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Canvas style={{ width: '100%', height: '100vh' }}>
          <XR>
            <ARScene />
          </XR>
        </Canvas>
      </div>
      {/* <div style={{ visibility: arMode ? 'visible' : 'hidden' }}>
        <BottomPanelAR overlayContentRef={overlayContent} />
      </div> */}
      {/* {arMode ? <BottomPanel overlayContentRef={overlayContent} /> : <p>Hai</p>} */}
    </>
  );
};

export default ARCanvas;

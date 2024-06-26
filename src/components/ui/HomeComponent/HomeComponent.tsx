import React from 'react';

import Header from 'src/components/ui/common/Header/Header';

import SidePanel from 'src/components/ui/common/SidePanel/SidePanel';
import BottomPanel from 'src/components/ui/common/BottomPanel/BottomPanel';
import CustomCanvas from 'src/components/three/CustomCanvas/CustomCanvas';
import {
  CanvasWrapper,
  HomeComponentWrapper,
} from 'src/components/ui/HomeComponent/HomeComponent.style';
import SplashLoader from 'src/components/ui/SplashLoader/SplashLoader';
import { useAppContext } from 'src/context/AppProvider';
import KitchenEnv from 'src/assets/images/kitchen_static.png';

const HomeComponent: React.FC = (): JSX.Element => {
  const { selectedEnvironment } = useAppContext();
  return (
    <HomeComponentWrapper>
      <Header />
      <SplashLoader />
      {selectedEnvironment != null && selectedEnvironment >= 0 && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            zIndex: 1,
          }}
        >
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={KitchenEnv}
          />
        </div>
      )}
      <CanvasWrapper>
        <CustomCanvas />
      </CanvasWrapper>
      <SidePanel />
      <BottomPanel />
      {/* <div
        style={{
          width: '20px',
          height: '20px',
          position: 'absolute',
          top: 0,
          zIndex: 100,
          transform: 'translate(205px, 429px)',
        }}
      >
        <Highlighter />
      </div> */}
      {/* {selectedHotSpot === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '71px',
            left: '50%',
            background: '#FBFDFF',
            color: '#033E6A',
            width: '231px',
            borderRadius: '4px',
            padding: '10px 10px',
            transform: 'translate(-50%, 0px)',
          }}
        >
          <h5 style={{ marginBottom: '12px', fontSize: '12px' }}>
            Grip easy handles
          </h5>
          <p style={{ fontWeight: 200, fontSize: '12px', lineHeight: '1.3' }}>
            Grip Easy handles are ergonomically designed to provide a
            comfortable and secure grip
          </p>
        </div>
      )}
      {selectedHotSpot === 1 && (
        <div
          style={{
            position: 'absolute',
            top: '371px',
            left: '34%',
            background: '#FBFDFF',
            color: '#033E6A',
            width: '231px',
            borderRadius: '4px',
            padding: '10px 10px',
            transform: 'translate(-50%, 0px)',
          }}
        >
          <h5 style={{ marginBottom: '12px', fontSize: '12px' }}>
            Energy star certified
          </h5>
          <p style={{ fontWeight: 200, fontSize: '12px', lineHeight: '1.3' }}>
            Shop with confidence knowing that our products are Energy Star
            Certified.
          </p>
        </div>
      )} */}
    </HomeComponentWrapper>
  );
};

export default HomeComponent;

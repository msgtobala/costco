import React from 'react';

import { Html } from '@react-three/drei';

const CustomLoader: React.FC = (): JSX.Element => {
  return (
    <Html center>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <></>
    </Html>
  );
};

export default CustomLoader;

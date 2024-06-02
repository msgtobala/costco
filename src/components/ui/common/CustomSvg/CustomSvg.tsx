import React from 'react';

import ICustomSvgProps from 'src/models/components/common/CustomSvg/CustomSvg.types';
import { CustomSVGWrapper } from 'src/components/ui/common/CustomSvg/CustomSvg.style';

const CustomSvg: React.FC<ICustomSvgProps> = (props): JSX.Element => {
  const { children } = props;

  return <CustomSVGWrapper>{children}</CustomSVGWrapper>;
};

export default CustomSvg;

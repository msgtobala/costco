import React from 'react';

import images from 'src/resources/images';
import {
  TabContentWrapper,
  FeatureWrapper,
  FeatureIcon,
  FeatureDescription,
} from 'src/components/ui/common/TabSwitcher/TabContent/TabContent.styled';
import { useAppContext } from 'src/context/AppProvider';

const Features: React.FC = (): JSX.Element => {
  const { setSelectedFeature } = useAppContext();

  const startAnimation = (index: number) => {
    setSelectedFeature(index);
  };

  return (
    <TabContentWrapper $noBorder>
      <FeatureWrapper onClick={() => startAnimation(0)}>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Grip Easy Handles</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper onClick={() => startAnimation(1)}>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Energy Star Certified</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Flatbead freezer compartment</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Dual- Dispense AutoFill Pitcher</FeatureDescription>
      </FeatureWrapper>
    </TabContentWrapper>
  );
};

export default Features;

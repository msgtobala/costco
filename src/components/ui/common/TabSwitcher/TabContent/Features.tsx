import React from 'react';

import images from 'src/resources/images';
import {
  TabContentWrapper,
  FeatureWrapper,
  FeatureIcon,
  FeatureDescription,
} from 'src/components/ui/common/TabSwitcher/TabContent/TabContent.styled';

const Features: React.FC = (): JSX.Element => (
  <TabContentWrapper noBorder>
    <FeatureWrapper>
      <FeatureIcon>
        <img src={images.common.FeatureIcon} alt="feature-icon" />
      </FeatureIcon>
      <FeatureDescription>Dual- Dispense AutoFill Pitcher</FeatureDescription>
    </FeatureWrapper>
    <FeatureWrapper>
      <FeatureIcon>
        <img src={images.common.FeatureIcon} alt="feature-icon" />
      </FeatureIcon>
      <FeatureDescription>
        Convertible drawer with soft freeze
      </FeatureDescription>
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

export default Features;

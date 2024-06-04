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
        <FeatureDescription>Ice maker</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper onClick={() => startAnimation(1)}>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Veggies Shelf</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper onClick={() => startAnimation(2)}>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Milk Chiler</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper onClick={() => startAnimation(3)}>
        <FeatureIcon>
          <img src={images.common.FeatureIcon} alt="feature-icon" />
        </FeatureIcon>
        <FeatureDescription>Adjustable Shelves</FeatureDescription>
      </FeatureWrapper>
    </TabContentWrapper>
  );
};

export default Features;

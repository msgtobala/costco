import React from 'react';

import {
  TabContentWrapper,
  ContentWrapper,
  AboutDescription,
  AboutTitle,
} from 'src/components/ui/common/TabSwitcher/TabContent/TabContent.styled';

const About: React.FC = (): JSX.Element => (
  <TabContentWrapper>
    <ContentWrapper>
      <AboutTitle>Smart Cafe</AboutTitle>
      <AboutDescription>Name and model</AboutDescription>
    </ContentWrapper>
    <ContentWrapper>
      <AboutTitle>28.7 Cu. ft</AboutTitle>
      <AboutDescription>Volume</AboutDescription>
    </ContentWrapper>
    <ContentWrapper>
      <AboutTitle>French 4 door</AboutTitle>
      <AboutDescription>Type</AboutDescription>
    </ContentWrapper>
  </TabContentWrapper>
);

export default About;

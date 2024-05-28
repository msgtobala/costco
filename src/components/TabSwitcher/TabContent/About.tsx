import {
  Description,
  Title,
  Wrapper,
  ContentWrapper,
} from "./TabContent.styled";

export const About = () => (
  <Wrapper>
    <ContentWrapper>
      <Title>Smart Cafe</Title>
      <Description>Name and model</Description>
    </ContentWrapper>
    <ContentWrapper>
      <Title>28.7 Cu. ft</Title>
      <Description>Volume</Description>
    </ContentWrapper>
    <ContentWrapper>
      <Title>French 4 door</Title>
      <Description>Type</Description>
    </ContentWrapper>
  </Wrapper>
);

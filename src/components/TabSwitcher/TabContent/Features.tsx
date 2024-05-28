import { FeatureIcon } from "../../Icons/FeatureIcon";
import {
  Description,
  Icon,
  Wrapper,
  FeatureWrapper,
} from "./TabContent.styled";

export const Features = () => (
  <Wrapper noBorder>
    <FeatureWrapper>
      <Icon>
        <FeatureIcon />
      </Icon>
      <Description>Dual- Dispense AutoFill Pitcher</Description>
    </FeatureWrapper>
    <FeatureWrapper>
      <Icon>
        <FeatureIcon />
      </Icon>
      <Description>Convertible drawer with soft freeze</Description>
    </FeatureWrapper>
    <FeatureWrapper>
      <Icon>
        <FeatureIcon />
      </Icon>
      <Description>Flatbead freezer compartment</Description>
    </FeatureWrapper>
    <FeatureWrapper>
      <Icon>
        <FeatureIcon />
      </Icon>
      <Description>Dual- Dispense AutoFill Pitcher</Description>
    </FeatureWrapper>
  </Wrapper>
);

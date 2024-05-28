import { ARView } from "../Icons/ARView";
import { Environment } from "../Icons/Environment";
import { Measurement } from "../Icons/Measurement";
import { Paint } from "../Icons/Paint";
import { Share } from "../Icons/Share";
import { FeatureButton, Wrapper } from "./FeatureBar.styled";

const Icons = [
  <Paint />,
  <Environment />,
  <Measurement />,
  <ARView />,
  <Share />,
];
export const FeatureBar = () => (
  <Wrapper>
    {Icons.map((Icon) => (
      <FeatureButton>{Icon}</FeatureButton>
    ))}
  </Wrapper>
);

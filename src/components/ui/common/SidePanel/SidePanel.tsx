import React from 'react';

import images from 'src/resources/images';
import {
  SidePanelWrapper,
  SidePanelButton,
} from 'src/components/ui/common/SidePanel/SidePanel.style';

const icons = [
  {
    name: 'Paint',
    src: images.common.Paint,
  },
  {
    name: 'Environment',
    src: images.common.Environment,
  },
  {
    name: 'Measurement',
    src: images.common.Measurement,
  },
  {
    name: 'AR',
    src: images.common.AR,
  },
  {
    name: 'Share',
    src: images.common.Share,
  },
];

const SidePanel: React.FC = (): JSX.Element => (
  <SidePanelWrapper $showPanels>
    {icons.map((icon) => (
      <SidePanelButton key={icon.name}>
        <img src={icon.src} alt={icon.name} />
      </SidePanelButton>
    ))}
  </SidePanelWrapper>
);

export default SidePanel;

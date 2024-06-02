import React, { useState } from 'react';

import images from 'src/resources/images';
import {
  SidePanelWrapper,
  SidePanelButton,
  SidePanelOptions,
  SidePanelOption,
  OptionsPanel,
  SelectedOption,
  OptionsPanelImage,
} from 'src/components/ui/common/SidePanel/SidePanel.style';
import { useAppContext } from 'src/context/AppProvider';

const icons = [
  {
    name: 'Paint',
    src: images.common.Paint,
    color: ['#000000', '#736C68'],
  },
  {
    name: 'Environment',
    src: images.common.Environment,
    background: [images.common.Hall, images.common.Kitchen],
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

const SidePanel: React.FC = (): JSX.Element => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(0);
  const { setSelectedEnvironment } = useAppContext();

  const onSelectIcon = (iconName: string) => {
    setSelectedIcon(iconName);
    setSelectedEnvironment(null);
    if (iconName === 'Paint') {
      setSelectedOption(0);
      return;
    }
    setSelectedOption(null);
  };

  const onSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    if (selectedIcon === 'Environment') {
      setSelectedEnvironment(optionIndex);
    }
  };

  return (
    <SidePanelWrapper $showPanels>
      <SidePanelOptions>
        {icons.map((icon) => (
          <SidePanelButton
            key={icon.name}
            $selected={selectedIcon === icon.name}
            onClick={() => onSelectIcon(icon.name)}
          >
            <img src={icon.src} alt={icon.name} />
          </SidePanelButton>
        ))}
        {selectedIcon === 'Paint' && (
          <SidePanelOption>
            {icons
              .find((icon) => icon.name === 'Paint')
              ?.color?.map((color, index) => {
                return (
                  <SelectedOption
                    key={color + index}
                    onClick={() => onSelectOption(index)}
                    $selected={index === selectedOption}
                  >
                    <OptionsPanel key={color} $color={color} />
                  </SelectedOption>
                );
              })}
          </SidePanelOption>
        )}
        {selectedIcon === 'Environment' && (
          <SidePanelOption>
            {icons
              .find((icon) => icon.name === 'Environment')
              ?.background?.map((image, index) => {
                return (
                  <SelectedOption
                    key={image + index}
                    onClick={() => onSelectOption(index)}
                    $selected={index === selectedOption}
                  >
                    <OptionsPanelImage key={image} $bgImg={image} />
                  </SelectedOption>
                );
              })}
          </SidePanelOption>
        )}
      </SidePanelOptions>
    </SidePanelWrapper>
  );
};

export default SidePanel;

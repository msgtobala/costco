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
  OptionsPanelIcon,
} from 'src/components/ui/common/SidePanel/SidePanel.style';
import { useAppContext } from 'src/context/AppProvider';
import { useNavigate } from 'react-router-dom';

const icons = [
  {
    name: 'Paint',
    src: images.common.Paint,
    color: ['#736C68', '#000000'],
  },
  {
    name: 'Environment',
    src: images.common.Environment,
    background: [images.common.Hall, images.common.Kitchen],
  },
  {
    name: 'Measurement',
    src: images.common.Measurement,
    icons: [
      images.common.Door,
      images.common.Chicken,
      images.common.Pizza,
      images.common.Bottles,
    ],
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
  const navigate = useNavigate();
  const { showPanels } = useAppContext();

  const onSelectIcon = (iconName: string) => {
    setSelectedIcon(iconName);
    setSelectedEnvironment(null);
    if (selectedIcon === iconName) {
      setSelectedIcon(null);
      return;
    }
    if (iconName === 'Paint') {
      setSelectedOption(0);
      return;
    }

    setSelectedOption(null);
    if (iconName === 'AR') {
      navigate('/ar');
    }
  };

  const onSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    if (selectedIcon === 'Environment') {
      setSelectedEnvironment(optionIndex);
    }
  };

  return (
    <SidePanelWrapper $showPanels={showPanels}>
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
        {selectedIcon === 'Measurement' && (
          <SidePanelOption>
            {icons
              .find((icon) => icon.name === 'Measurement')
              ?.icons?.map((image, index) => {
                return (
                  <SelectedOption
                    key={image + index}
                    onClick={() => onSelectOption(index)}
                    $selected={false}
                    // $selected={index === selectedOption}
                  >
                    <OptionsPanelIcon key={image} $bgImg={image} />
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

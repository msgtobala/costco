import React from 'react';

import IARControlsProps from 'src/models/components/ui/ARControls/ARControls.type';
import { useAppContext } from 'src/context/AppProvider';
import {
  DOMContainer,
  OverlayContainer,
  ButtonContainer,
} from 'src/components/ui/ARControls/ARControls.style';

const ARControls: React.FC<IARControlsProps> = (props): JSX.Element => {
  const { animations, setAnimationIndex } = useAppContext();
  const { overlayContentRef } = props;

  const onButtonClicked = (index: number) => {
    setAnimationIndex(index);
  };

  return (
    <OverlayContainer id="overlay-content" ref={overlayContentRef}>
      <DOMContainer>
        <ButtonContainer>
          {animations.map((name: string, index: number) => {
            return (
              <button
                type="button"
                key={name}
                onClick={() => {
                  onButtonClicked(index);
                }}
              >
                {name}
              </button>
            );
          })}
        </ButtonContainer>
      </DOMContainer>
    </OverlayContainer>
  );
};

export default ARControls;

import React from 'react';

import { useAppContext } from 'src/context/AppProvider';
import {
  DOMContainer,
  OverlayContainer,
  ButtonContainer,
} from 'src/components/ui/ARControls/ARControls.style';

// TODO(Balaji): Add Types and remove any
const ARControls: React.FC<{ overlayContentRef: any }> = (
  props,
): JSX.Element => {
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

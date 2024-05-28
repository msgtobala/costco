import React from 'react';
import { useCharacter } from 'src/context/CharacterAnimation';

const Interface: React.FC<{ overlayContentRef: any }> = (
  props,
): JSX.Element => {
  const { animations, animationIndex, setAnimationIndex } = useCharacter();
  const { overlayContentRef } = props;
  return (
    <div id="overlay-content" ref={overlayContentRef}>
      <div className="dom-container">
        <div className="button-container">
          {animations.map((name: string, index: number) => {
            return (
              <button
                key={name}
                onClick={() => {
                  setAnimationIndex(index);
                }}
                className={`button ${index === animationIndex ? 'active' : ''}`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interface;

import React from 'react';

import {
  HighlightBlinker,
  HighlighterCircle,
  HighlighterWrapper,
} from './Highlighter.style';

const Highlighter: React.FC = (): JSX.Element => {
  return (
    <HighlighterWrapper>
      <HighlighterCircle />
      <HighlightBlinker />
    </HighlighterWrapper>
  );
};

export default Highlighter;

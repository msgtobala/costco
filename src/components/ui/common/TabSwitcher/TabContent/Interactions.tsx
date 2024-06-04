import React from 'react';

import { TabContentWrapperInteractions } from 'src/components/ui/common/TabSwitcher/TabContent/TabContent.styled';
import BottomPanelsARControls from '../../BottomPanelAR/BottomPanelARControls';
import { useAppContext } from 'src/context/AppProvider';

const Interactions: React.FC = (): JSX.Element => {
  const { animations, setAnimationIndex } = useAppContext();

  const onButtonClicked = (index: number) => {
    setAnimationIndex(index);
  };

  return (
    <TabContentWrapperInteractions>
      <BottomPanelsARControls
        animations={animations}
        onButtonClicked={onButtonClicked}
      />
    </TabContentWrapperInteractions>
  );
};

export default Interactions;

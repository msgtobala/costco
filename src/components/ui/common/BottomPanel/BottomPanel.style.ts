import styled, { keyframes } from 'styled-components';

const footerSlideIn = keyframes`
  0% {
      transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const footerSlideOut = keyframes`
  0% {
      transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const BottomPanelWrapper = styled.div<{ $showPanels: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
  animation: ${(props) => (props.$showPanels ? footerSlideIn : footerSlideOut)}
    1s ease-in-out forwards;
`;

export default BottomPanelWrapper;

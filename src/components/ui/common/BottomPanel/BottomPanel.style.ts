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

export const BottomPanelWrapper = styled.div<{ $showPanels: boolean }>`
  position: absolute;
  bottom: 0 !important;
  width: 100%;
  transform: translateY(100%);
  animation: ${(props) => (props.$showPanels ? footerSlideIn : footerSlideOut)}
    1s ease-in-out forwards;
  z-index: 9999999999999999999999999999999;
`;

export const PanelWrapper = styled.div`
  background-color: white;
`;

import styled, { keyframes } from 'styled-components';

const sidePanelSlideIn = keyframes`
  0% {
    transform: translateX(100%);
    margin-right: 0;
  }
  100% {
    transform: translateX(0);
    margin-right: 18px;
  }
`;

const sidePanelSlideOut = keyframes`
  0% {
    transform: translateX(0);
    margin-right: 18px;
  }
  100% {
    transform: translateX(100%);
    margin-right: 0;
  }
`;

export const SidePanelWrapper = styled.div<{ $showPanels: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  position: absolute;
  top: 75px;
  right: 0;
  width: 33px;
  border: 1px;
  background: linear-gradient(52.88deg, #fbfdff 27.09%, #ffffff 78.16%);
  transform: translateX(100%);
  animation: ${(props) =>
      props.$showPanels ? sidePanelSlideIn : sidePanelSlideOut}
    1s ease-in-out forwards;
`;

export const SidePanelButton = styled.button`
  all: unset;
  width: 25px;
  height: 25px;
  margin: 7px 2px;
  text-align: center;
  cursor: pointer;

  & img {
    width: 60%;
    height: 60%;
  }
`;

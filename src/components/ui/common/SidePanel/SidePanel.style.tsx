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

export const SidePanelButton = styled.button<{ $selected?: boolean }>`
  all: unset;
  width: 25px;
  height: 25px;
  margin: 7px 2px;
  text-align: center;
  background-color: ${(props) => (props.$selected ? '#005DA4' : 'transparent')};
  border-radius: 50%;
  cursor: pointer;

  & img {
    width: 60%;
    height: 60%;
    filter: ${(props) =>
      props.$selected ? 'grayscale(1) invert(1) brightness(2)' : 'none'};
  }
`;

export const SidePanelOptions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SidePanelOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: -32px;
  transform: translate(0px, -50%);
  height: 100px;
`;

export const SelectedOption = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: ${(props) =>
    props.$selected ? '2px solid #005DA4' : '2px solid transparent'};
`;

export const OptionsPanel = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

export const OptionsPanelImage = styled.div<{ $bgImg: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url(${(props) => props.$bgImg}) no-repeat center;
`;

export const OptionsPanelIcon = styled.div<{ $bgImg: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url(${(props) => props.$bgImg}) no-repeat center white;
`;

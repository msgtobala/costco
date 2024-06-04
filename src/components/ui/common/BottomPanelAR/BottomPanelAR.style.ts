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

export const BottomPanelARWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  /* pointer-events: none; */
`;

export const BottomPanelWrapper = styled.div<{ $showPanels: boolean }>`
  position: absolute;
  bottom: 0 !important;
  width: 100%;
  transform: translateY(100%);
  animation: ${(props) => (props.$showPanels ? footerSlideIn : footerSlideOut)}
    1s ease-in-out forwards;
`;

export const PanelWrapper = styled.div`
  background-color: white;
`;

export const BottomPanelsARControlsWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* gap: 20px; */
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  padding: 26px 20px 28px 20px;
  background: linear-gradient(180deg, #fbfdff 0%, #ffffff 100%);

  & span {
    color: #0079d5;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    border: 1.5px solid #0079d5 !important;
    font-family: 'Inter-SemiBold', sans-serif;
    /* width: 200px !important; */
  }
`;

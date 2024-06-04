import styled, { keyframes } from 'styled-components';

const CircleAnimation = keyframes`
    0% {
        transform: scale(1);
    }

    10% {
        transform: scale(1.03);
    }
    20% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
`;

const HighligthingAnimation = keyframes`
    0% {
        transform: scale(2);
        opacity: .8;
    }

    50% {
        transform: scale(1.6);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: .8;
    }
`;

export const HighlighterWrapper = styled.div`
  height: 15px;
  width: 15px;
  transform: scale(1);
  opacity: 1;
  transition:
    opacity 0.24s ease-out,
    transform 167ms cubic-bezier(0.17, 0, 0.83, 1);
`;

export const HighlighterCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #4d4d4d40;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 3px 3px #00000040;
  transform: scale(1);
  opacity: 1;
  animation-name: ${CircleAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);
  transition:
    opacity 0.2s ease-out,
    transform 333ms 333ms cubic-bezier(0.17, 0, 0.83, 1);
`;

export const HighlightBlinker = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px solid #ffffff;
  border-radius: 50%;
  transform: scale(0.01);
  opacity: 0;
  box-shadow: 0 1px 3px #00000080;
  transform: scale(2);
  opacity: 0.8;
  animation-name: ${HighligthingAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);
  transition:
    opacity 0.2s ease-out,
    transform 333ms 333ms cubic-bezier(0.17, 0, 0.83, 1);
`;

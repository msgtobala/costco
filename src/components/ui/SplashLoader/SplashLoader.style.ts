import styled, { keyframes, css } from 'styled-components';

const hideAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; display: none; }
`;

export const SplashContainer = styled.div<{ $progress: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: rgb(191, 197, 203);
  background: linear-gradient(
    169deg,
    rgba(191, 197, 203, 1) 0%,
    rgba(205, 210, 219, 1) 44%,
    rgba(161, 169, 177, 1) 94%
  );
  animation: ${(props) =>
    props.$progress === 100
      ? css`
          ${hideAnimation} 1s forwards
        `
      : 'none'};
  animation-delay: ${(props) => (props.$progress === 100 ? '0.5s' : 'none')};
  z-index: 5;
`;

export const SplashLoaderWrapper = styled.div`
  width: 200px;
  height: 200px;
`;

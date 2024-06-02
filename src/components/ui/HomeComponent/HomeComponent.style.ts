import styled from 'styled-components';

export const HomeComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: rgb(191, 196, 203);
  background: linear-gradient(
    180deg,
    rgba(191, 196, 203, 1) 0%,
    rgba(195, 200, 207, 1) 3%,
    rgba(201, 206, 214, 1) 9%,
    rgba(161, 168, 177, 1) 29%,
    rgba(168, 173, 183, 1) 54%,
    rgba(184, 190, 199, 1) 55%,
    rgba(190, 196, 207, 1) 100%
  );
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  canvas {
    width: 100%;
    height: 100vh;
  }
`;

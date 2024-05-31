import styled from 'styled-components';

export const HomeComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: lightcyan;
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

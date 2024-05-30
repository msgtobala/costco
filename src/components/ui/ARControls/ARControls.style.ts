import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5rem;
  pointer-events: none;
`;

export const DOMContainer = styled.div`
  position: absolute;
  bottom: 8vh;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 90%;
  padding: 1rem;
  overflow: auto;
  pointer-events: all;
  margin: 0 auto;

  & button {
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    border-style: none;
    color: white;
    background-color: rgba(255, 127, 80, 0.7);
    cursor: pointer;
  }

  button:active {
    background-color: rgba(255, 127, 80, 1);
  }
`;

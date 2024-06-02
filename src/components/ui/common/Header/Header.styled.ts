import styled, { keyframes } from 'styled-components';

const slideInTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
      visibility: visible;
  }

  to{
    transform: translate3d(0, 0, 0);
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 20px;
  animation: ${slideInTop} 1s ease-in-out;
  animation-delay: 1s;
`;

export const HeaderButton = styled.button`
  all: unset;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ProductText = styled.h1`
  font-family: 'Inter-Medium', sans-serif;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 500;
  color: #080736;
`;

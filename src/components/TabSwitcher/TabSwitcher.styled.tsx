import styled, { css } from "styled-components";

export const Switcher = styled.div`
  display: flex;
  height: 29px;
  width: 75%;
  margin: auto;
  border: 1px solid #fff;
  border-bottom: 1px solid #d9d9d999;
  border-radius: 4px 4px 0 0;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  border: none;
  padding: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.5px;
  background-color: #fff;
  color: ${({ isActive }) => (isActive ? "#033e6a" : "#033e6a60")};
  ${({ isActive }) =>
    isActive &&
    css`
      span {
        padding: 7px 18px;
        border-bottom: 1px solid #0079d5;
      }
    `}
`;

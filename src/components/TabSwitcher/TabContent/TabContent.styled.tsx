import { css, styled } from "styled-components";

export const Wrapper = styled.div<{ noBorder?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  padding: 0 20px;
  > div {
    border-right: 0.4px dotted #0079d5;
  }
  :last-child {
    border: none;
  }

  ${({ noBorder }) =>
    noBorder &&
    css`
      > div {
        border: none;
      }
    `}
`;

export const ContentWrapper = styled.div`
  flex: 0.66;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-inline-end: 20px;
  padding: 6px 0;
`;

export const Title = styled.h3`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  margin-bottom: 2px;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 12px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #0079d5;
`;

export const Description = styled.p`
  font-size: 8px;
  line-height: 10px;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

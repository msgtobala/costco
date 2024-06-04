import { css, styled } from 'styled-components';

export const TabContentWrapper = styled.div<{ $noBorder?: boolean }>`
  height: 90px;
  position: relative;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  padding: 12px 14px;
  transition: height 0.3s ease-in-out;
  > div {
    border-right: 0.4px dotted #0079d5;
  }

  > div:nth-child(2) {
  }

  :last-child {
    border: none;
    margin-inline-end: 0;
  }

  ${({ $noBorder }) =>
    $noBorder &&
    css`
      > div {
        border: none;
      }
    `}
`;

export const TabContentWrapperInteractions = styled(TabContentWrapper)<{ $noBorder?: boolean }>`
  height: 90px;
  position: relative;
  z-index: -1;
  display: block;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  padding: 0;
  > div {
    border-right: 0.4px dotted #0079d5;
  }

  > div:nth-child(2) {
  }

  :last-child {
    border: none;
    margin-inline-end: 0;
  }

  ${({ $noBorder }) =>
    $noBorder &&
    css`
      > div {
        border: none;
      }
    `}
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
`;

export const FeatureIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 28px;
  height: 28px;
  border-radius: 24px;
  background-color: #0079d5;
`;

export const FeatureDescription = styled.p`
  font-size: 11px;
  font-family: 'Inter-Bold', sans-serif;
  text-align: center;
  color: #033e6a;
  line-height: 12px;
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

export const AboutTitle = styled.h3`
  font-family: 'Inter-Bold', sans-serif;
  color: #033e6a;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin-bottom: 2px;
`;

export const AboutDescription = styled.p`
  font-family: 'Inter-Regular', sans-serif;
  color: #b2afaf;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  margin-top: 3px;
`;

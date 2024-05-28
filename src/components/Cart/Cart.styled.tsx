import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 18px;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  box-sizing: border-box;
  background-color: #dfe8f1;
  border: 1px;
  border-radius: 8px 8px 0 0;
  position: absolute;
  bottom: -64px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  margin: 0;
`;

export const DeliveryDate = styled.p`
  display: flex;
  justify-content: start;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    width: 75px;
  }
`;

export const BuyNow = styled.button`
  all: unset;
  width: 100px;
  height: 27px;
  border: 1px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0079d5;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.5px;
`;

export const PostalCode = styled.span`
  border-bottom: 1px solid #033e6a;
`;

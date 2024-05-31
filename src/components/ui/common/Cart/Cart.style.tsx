import styled from 'styled-components';

export const CartWrapper = styled.div`
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
`;

export const Price = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  line-height: 22px;
  color: #033e6a;
  font-family: 'Inter-Bold', sans-serif;
`;

export const DeliveryDate = styled.div`
  font-family: 'Inter-Regular', sans-serif;
  display: flex;
  justify-content: start;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;

  & img {
    width: 24px;
    height: 24px;
  }

  p {
    width: 75px;
    margin-left: 4px;
    color: #033e6a;
  }

  span {
    font-family: 'Inter-Bold', sans-serif !important;
  }
`;

export const BuyNow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 28px;
  border-radius: 5px;
  font-family: 'Inter-Medium', sans-serif;
  background: #0079d5;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.5px;
  border: none;
  padding: 16px 0;
`;

export const PostalCode = styled.span`
  border-bottom: 1px solid #033e6a;
`;

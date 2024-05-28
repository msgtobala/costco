import { Delivery } from "../Icons/Delivery";
import {
  DeliveryDate,
  Price,
  Wrapper,
  BuyNow,
  PostalCode,
} from "./Cart.styled";

export const Cart = () => (
  <Wrapper>
    <Price>$ 968.54</Price>
    <DeliveryDate>
      <Delivery />
      <span>
        Monday, June 2nd to <PostalCode>960507</PostalCode>
      </span>
    </DeliveryDate>
    <BuyNow>BUY NOW</BuyNow>
  </Wrapper>
);

import React from 'react';

import images from 'src/resources/images';
import {
  CartWrapper,
  DeliveryDate,
  Price,
  BuyNow,
  PostalCode,
} from 'src/components/ui/common/Cart/Cart.style';

const Cart: React.FC = (): JSX.Element => (
  <CartWrapper>
    <Price>$ 968.54</Price>
    <DeliveryDate>
      <img src={images.common.delivery} alt="delivery" />
      <p>
        Monday, June 2nd to <PostalCode>960507</PostalCode>
      </p>
    </DeliveryDate>
    <BuyNow>BUY NOW</BuyNow>
  </CartWrapper>
);

export default Cart;

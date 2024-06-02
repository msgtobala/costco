import React from 'react';

import Images from 'src/resources/images';
import {
  HeaderButton,
  HeaderWrapper,
  ProductText,
} from 'src/components/ui/common/Header/Header.styled';

const Header: React.FC = (): JSX.Element => (
  <HeaderWrapper>
    <HeaderButton>
      <img src={Images.common.ArrowLeft} alt="Back" />
    </HeaderButton>
    <ProductText>Smart Cafe 28</ProductText>
    <HeaderButton>
      <img src={Images.common.Cart} alt="Cart" />
    </HeaderButton>
  </HeaderWrapper>
);

export default Header;

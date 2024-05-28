import { ArrowLeft } from "../Icons/ArrowLeft";
import { Cart } from "../Icons/Cart";
import { BackButton, HeaderWrapper, Heading } from "./Header.styled";

export const Header = () => (
  <HeaderWrapper>
    {/* TODO: ADD FUNCTIONALITY */}
    <BackButton>
      <ArrowLeft />
    </BackButton>
    <Heading>Smart Cafe 28</Heading>
    <BackButton>
      <Cart />
    </BackButton>
  </HeaderWrapper>
);

import { Cart } from "../components/Cart/Cart";
import { FeatureBar } from "../components/FeatureBar/FeatureBar";
import { Header } from "../components/Header/header";
import { TabSwitcher } from "../components/TabSwitcher/TabSwitcher";
import { ProductDetail, Wrapper } from "./ProductPage.styled";

export const ProductPage = () => (
  <Wrapper>
    <Header />
    {/* space for three js model */}
    <div style={{ height: "200px" }} />
    <ProductDetail>
      <TabSwitcher />
      <Cart />
    </ProductDetail>

    <FeatureBar />
  </Wrapper>
);

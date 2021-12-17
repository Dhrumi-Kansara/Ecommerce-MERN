import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import cartPageImg1 from "../utils/images/cart_page.png";
import cartPageImg2 from "../utils/images/cart_page2.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid teal;
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "teal")};
  &:hover {
    background-color: #006767;
    color: white;
  }
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  margin: 0 10px;
  padding-bottom: 5px;
  cursor: pointer;
  border-bottom: 1px solid #000;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "150px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "row", justifyContent: "space-around" })}
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;

  border-radius: 8px;
  padding: 4px 8px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SymmaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SymmaryItemText = styled.span``;
const SymmaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  font-weight: 600;
  color: white;
  border: teal;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={cartPageImg1} />
                <Details>
                  <ProductName>
                    {/* <strong>Product:</strong> */}
                    BLACK META SHOES
                  </ProductName>
                  <ProductId>
                    {/* <strong>ID:</strong>  */}
                    9856712938
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <strong>Size:</strong> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>RS 700</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={cartPageImg2} />
                <Details>
                  <ProductName>
                    {/* <strong>Product:</strong>  */}
                    MATRIX T-SHIRT
                  </ProductName>
                  <ProductId>
                    {/* <strong>ID:</strong>  */}
                    9856712967
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <strong>Size:</strong> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>RS 700</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SymmaryItem>
              <SymmaryItemText>Sub Total</SymmaryItemText>
              <SymmaryItemPrice>RS. 4000</SymmaryItemPrice>
            </SymmaryItem>
            <SymmaryItem>
              <SymmaryItemText>Estimated Shipping</SymmaryItemText>
              <SymmaryItemPrice>RS. 150</SymmaryItemPrice>
            </SymmaryItem>
            <SymmaryItem>
              <SymmaryItemText>Shipping Discount</SymmaryItemText>
              <SymmaryItemPrice>RS. -150</SymmaryItemPrice>
            </SymmaryItem>
            <SymmaryItem type="total">
              <SymmaryItemText>Total</SymmaryItemText>
              <SymmaryItemPrice>RS. 3850</SymmaryItemPrice>
            </SymmaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

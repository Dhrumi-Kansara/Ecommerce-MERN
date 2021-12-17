import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentImg from "../utils/images/payment.png";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex: 1;
`;
const Desc = styled.p`
  flex: 1;
  margin: 20px 0px;
`;
const SocialContanier = styled.div`
  flex: 1;
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactText = styled.p`
  margin-left: 10px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MART</Logo>
        <Desc>
          Aliquip sit deserunt aliqua mollit irure laboris mollit deserunt.
          Fugiat Lorem deserunt elit magna laborum excepteur nisi ex et
          excepteur officia. Id tempor pariatur amet consequat non aliqua quis
          dolor laborum esse magna qui. Cupidatat qui duis dolor est.
        </Desc>
        <SocialContanier>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContanier>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />
          <ContactText>2333 Pecan Acres Ln</ContactText>
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          <ContactText>(435)-768-6656</ContactText>
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon />
          <ContactText>contact@mart.com</ContactText>
        </ContactItem>
        <Payment src={PaymentImg} />
      </Right>
    </Container>
  );
};

export default Footer;

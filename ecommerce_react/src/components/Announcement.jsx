import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  font-color: white;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Order Over RS. 500</Container>;
};

export default Announcement;

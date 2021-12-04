import styled from "styled-components";
import { categories } from "../helper/data";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;

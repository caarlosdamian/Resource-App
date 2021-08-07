import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeList = styled.ul`
  color: black;
  align-items: center;
  padding: 30px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  margin: 20px 10px;
`;
export const HomeListItem = styled(Link)`
  text-decoration: none;
  display: flex;
  margin: 10px 10px;
  width: 200px;
  &:hover {
    cursor: pointer;
    border-left: 1px solid black;
  }
`;

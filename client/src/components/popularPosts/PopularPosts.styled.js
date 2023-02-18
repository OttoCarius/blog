import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  opacity: 0.8;
  margin: 4px 4px;
`;

export const LinkList = styled(Link)`
  display: flex;
  font-size: 16px;
  color: rgb(240, 228, 228);
  background-color: rgba(62, 109, 196, 0.192);
  padding: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    background-color: rgb(37, 76, 148);
    color: white;
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

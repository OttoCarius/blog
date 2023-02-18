import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 20px 0;
  letter-spacing: normal;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 25px;
  max-width: 1280px;

  @media (max-width: 400px) {
    padding: 0 5px;
  }
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    /* justify-content: center; */
    column-gap: 10px;
    row-gap: 10px;
  }
`;

export const NavLinkLogo = styled(NavLink)`
  margin-right: auto;
  color: white;
  font-size: 24px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 420px) {
    column-gap: 20px;
    font-size: 14px;
    font-weight: 500;
    row-gap: 5px;
  }

  @media (max-width: 340px) {
    column-gap: 20px;
    font-size: 12px;
    font-weight: 400;
    row-gap: 5px;
  }
`;

export const BtnContainer = styled.div`
  display: block;
  color: white;
  transition: opacity 0.2s ease-in;
  background-color: #000000;
  padding: 6px;

  :hover {
    background-color: #000000a2;
  }

  @media (max-width: 500px) {
    padding: 2px;
  }
`;

export const Button = styled.button`
  display: block;
  color: white;
  transition: opacity 0.2s ease-in;
  background-color: #000000;
  padding: 6px;

  @media (max-width: 500px) {
    padding: 2px;
  }
`;

export const NavLinkItem = styled(NavLink)`
  color: grey;
  transition: opacity 0.2s ease-in;

  &:hover,
  &:focus {
    color: white;
  }
  &.active {
    position: relative;
    /* font-size: 16px; */
    color: white;
  }
`;

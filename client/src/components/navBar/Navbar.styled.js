import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 20px 0;
  letter-spacing: normal;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1280px;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const NavLinkLogo = styled(NavLink)`
  margin-right: auto;
  color: white;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
`;

export const BtnContainer = styled.div`
  display: block;
  color: white;
  transition: opacity 0.2s ease-in;
  background-color: darkslategray;
  padding: 6px;
`;

export const Button = styled.button`
  display: block;
  color: white;
  transition: opacity 0.2s ease-in;
  background-color: darkslategray;
  padding: 6px;
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
    font-size: 18px;
    color: white;
  }
`;

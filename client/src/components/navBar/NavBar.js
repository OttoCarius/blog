import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkIsAuth, logout } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import {
  Nav,
  Container,
  NavRow,
  NavLinkLogo,
  List,
  BtnContainer,
  Button,
  NavLinkItem,
} from "./Navbar.styled";

export default function NavBar() {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <Nav>
      <Container>
        <NavRow>
          <div>
            <NavLinkLogo to="/">Blog</NavLinkLogo>
          </div>
          <div>
            {isAuth && (
              <List>
                <li>
                  <NavLinkItem to="/">Головна</NavLinkItem>
                </li>

                <li>
                  <NavLinkItem to="posts">Пости</NavLinkItem>
                </li>
                <li>
                  <NavLinkItem to="new">Додати пост</NavLinkItem>
                </li>
              </List>
            )}
          </div>
          <BtnContainer>
            {isAuth ? (
              <button onClick={logoutHandler}>Вийти</button>
            ) : (
              <Link to={"/login"}>
                <Button>Увійти</Button>
              </Link>
            )}
          </BtnContainer>
        </NavRow>
      </Container>
    </Nav>
  );
}

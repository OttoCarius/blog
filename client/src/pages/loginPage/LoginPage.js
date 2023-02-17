import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { checkIsAuth } from "../../redux/auth/authSlice";
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginLabel,
  LoginInput,
  PasswordLabel,
  PasswordInput,
  BtnWrap,
  BtnLogin,
  LinkRegister,
} from "./LoginPage.styled";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);

  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginContainer className="container">
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <LoginTitle className="login-title">Авторизація</LoginTitle>
          <LoginLabel>
            <LoginInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логін"
            />
          </LoginLabel>
          <PasswordLabel>
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
          </PasswordLabel>
          <BtnWrap>
            <BtnLogin
              onClick={handleSubmit}
              type="submit"
              className="btn-login"
            >
              Увійти
            </BtnLogin>
            <LinkRegister to="/register">Немає облікового запису?</LinkRegister>
          </BtnWrap>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

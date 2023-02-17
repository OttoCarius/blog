import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import {
  RegisterContainer,
  RegisterForm,
  RegisterTitle,
  RegisterLabel,
  RegisterInput,
  PasswordLabel,
  PasswordInput,
  BtnWrap,
  BtnRegister,
  LinkLogin,
} from "./RegisterPage.styled.js";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RegisterContainer>
        <RegisterForm onSubmit={(e) => e.preventDefault()}>
          <RegisterTitle className="register-title">Реєстрація</RegisterTitle>
          <RegisterLabel>
            <RegisterInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логін"
            />
          </RegisterLabel>
          <PasswordLabel>
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
          </PasswordLabel>
          <BtnWrap>
            <BtnRegister type="submit" onClick={handleSubmit}>
              Підтвердити
            </BtnRegister>
            <LinkLogin to="/login" className="register">
              Вже зареєстровані?
            </LinkLogin>
          </BtnWrap>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
}

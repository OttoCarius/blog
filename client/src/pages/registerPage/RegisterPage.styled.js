import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1280px;
`;

export const RegisterForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 473px;
  width: 50%;
  margin-top: 140px;
`;

export const RegisterTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: white;
  margin-bottom: 50px;
`;

export const RegisterLabel = styled.label`
  font-size: 24px;
  color: aliceblue;
`;

export const RegisterInput = styled.input`
  color: black;
  width: 380px;
  border-radius: 20px;
  background-color: azure;
  border: 2px solid;
  border-color: cadetblue;
  padding: 6px 10px;
  font-size: 18px;
  outline: none;
  margin-bottom: 40px;

  /* ::placeholder {
    text-align: center;
  } */

  @media (max-width: 620px) {
    width: 280px;
  }
`;

export const PasswordLabel = styled.label`
  font-size: 24px;
  color: aliceblue;
`;

export const PasswordInput = styled.input`
  color: black;
  width: 380px;
  border-radius: 20px;
  background-color: azure;
  border: 2px solid;
  border-color: cadetblue;
  padding: 6px 10px;
  font-size: 18px;
  outline: none;

  @media (max-width: 620px) {
    width: 280px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const BtnRegister = styled.button`
  border-radius: 20px;
  background-color: cadetblue;
  color: aliceblue;
  padding: 8px 12px;
  width: 260px;
  transition: opacity 0.2s ease-in;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 620px) {
    width: 200px;
  }
`;

export const LinkLogin = styled(Link)`
  margin-top: 16px;
  color: rgba(38, 137, 236, 0.932);
`;

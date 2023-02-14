import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { registerUser } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";

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
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1 className="register-title">Реєстрація</h1>
          <label className="register-label">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логін"
              className="register-input"
            />
          </label>
          <label className="password-label">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="password-input"
            />
          </label>
          <div className="button-wrap">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-register"
            >
              Підтвердити
            </button>
            <Link to="/login" className="register">
              Вже зареєстровані?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

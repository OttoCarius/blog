import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { checkIsAuth } from "../../redux/auth/authSlice";
import "./styles.css";

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
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1 className="login-title">Авторизація</h1>
          <label className="login-label">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логін"
              className="login-input"
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
            <button onClick={handleSubmit} type="submit" className="btn-login">
              Увійти
            </button>
            <Link to="/register" className="register">
              Немає облікового запису?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { checkIsAuth, logout } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import "./styles.css";

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

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <div>
            <NavLink to="/" className="logo">
              Blog
            </NavLink>
          </div>
          <div>
            {isAuth && (
              <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Головна
                  </NavLink>
                </li>

                <li className="nav-list__item">
                  <NavLink
                    to="posts"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Пости
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    to="new"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Додати пост
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="auth-button">
            {isAuth ? (
              <button onClick={logoutHandler}>Вийти</button>
            ) : (
              <Link to={"/login"}>
                <button className="auth-button__come">Увійти</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

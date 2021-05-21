import { useContext } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Context } from "../App";
import useAuth from "../hook/useAuth";

export default function Header() {
  function clickMenu() {
    document.body.classList.add("menu-is-show");
  }

  let dispatch = useDispatch();
  // let { login, handleLogout } = useAuth();
  let { login } = useSelector((store) => store.authReducer);

  function openPopup(e) {
    e.preventDefault();
    document.querySelector(".res").style.display = "flex";
  }
  function logOut(e) {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={clickMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {login ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{login.name}</div>
                  <div className="avatar">
                    <img src={login.avatar} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/profile/my-course">Khóa học của tôi</Link>
                <Link to="/profile">Thông tin tài khoản</Link>
                <Link to="#" onClick={logOut}>
                  Đăng xuất
                </Link>
              </div>
            </div>
          ) : (
            <div class="not-login bg-none">
              <Link to="#" class="btn-register" onClick={openPopup}>
                Đăng nhập
              </Link>
              <Link to="/register" class="btn main btn-open-login">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

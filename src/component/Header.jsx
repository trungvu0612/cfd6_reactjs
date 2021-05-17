import { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { Context } from "../App";

export default function Header() {
  function clickMenu() {
    document.body.classList.add("menu-is-show");
  }

  let { login } = useContext(Context);

  function openPopup(e) {
    e.preventDefault();
    document.querySelector(".res").style.display = "flex";
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
                <Link to="#">Khóa học của tôi</Link>
                <Link to="/profile">Thông tin tài khoản</Link>
                <Link to="#">Đăng xuất</Link>
              </div>
            </div>
          ) : (
            <div class="not-login bg-none">
              <a href="#" class="btn-register" onclick={openPopup}>
                Đăng nhập
              </a>
              <a href="login.html" class="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

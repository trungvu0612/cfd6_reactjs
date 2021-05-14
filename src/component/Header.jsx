import { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { Context } from "../App";

export default function Header() {
  function clickMenu() {
    document.body.classList.add("menu-is-show");
  }

  let value = useContext(Context);

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
          <div className="have-login">
            <div className="account">
              <a href="#" className="info">
                <div className="name">{value.login.name}</div>
                <div className="avatar">
                  <img src={value.login.avatar} alt="" />
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
          {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Header(){
  function clickMenu(){
    document.body.classList.toggle('menu-is-show');
  }
return (
     <>
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
          <a href="#" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </a>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger">
              </div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
          </div>
        </div>
      </header>
          <nav className="nav">
        <ul>
          <li className="li_login">
            <Link href="#">Đăng nhập</Link>
            <Link href="#">Đăng ký</Link>
          </li>
          <li className="active">
            <Link to="#">Trang chủ</Link>
          </li>
          <li>
            <Link to="#">CFD Team</Link>
          </li>
          <li>
            <Link to="#">Khóa Học</Link>
          </li>
          <li>
            <Link to="#">Dự Án</Link>
          </li>
          <li>
            <Link to="#">Liên hệ</Link>
        </li>
      </ul>
    </nav>
     </>
    );
  }
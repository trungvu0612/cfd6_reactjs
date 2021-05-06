export default function Page404(){
    return (
      <div>
        <main className="notfound" id="main">
          <div className="container">
            <section>
              <h2 className="main-title">404</h2>
              <p>Không tìm thấy trang</p>
              <a href="#" className="btn main round">Trang chủ</a>
            </section>
          </div>
        </main>
          <div className="container">
            <div className="row">
              <div className="col-md-5 left">
                <p className="des">
                  Sáng tạo, tinh tế và phù hợp sẽ khiến
                  sản phẩm của bạn trở nên khác biệt.
                </p>
                <p className="address">
                  Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                </p>
                <p className="phone">(+84) 98 9596 913</p>
                <div className="social">
                  <a href="#">
                    <img src="img/fb-icon.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/email-icon.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/skype-icon.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Trang chủ</a>
                    </li>
                    <li>
                      <a href="#">Khóa học</a>
                    </li>
                    <li>
                      <a href="#">Thanh toán</a>
                    </li>
                    <li>
                      <a href="#">Điều khoản</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <a href="#" className="back-to-top">
              <div className="line" />
              CUỘN LÊN
            </a>
          </div>
          <div className="copy-right">
            <div className="container">
              <p>2020 Creative Front-End Dev</p>
              <p>Được thiết kế và lập trình bởi CFD Team</p>
            </div>
          </div>
        {/* popup video homepage */}
        <div className="popup-video" style={{display: 'none'}}>
          <div className="wrap">
            <div className="video-src" />
          </div>
          <div className="close" />
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            {/* login-form */}
            <div className="ct_login" style={{display: 'block'}}>
              <h2 className="title">Đăng nhập</h2>
              <input type="text" placeholder="Email / Số điện thoại" />
              <input type="password" placeholder="Mật khẩu" />
              <div className="remember">
                <label className="btn-remember">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <p>Nhớ mật khẩu</p>
                </label>
                <a href="#" className="forget">Quên mật khẩu?</a>
              </div>
              <div className="btn rect main btn-login">đăng nhập</div>
              <div className="text-register" style={{}}>
                <strong>hoặc đăng ký bằng</strong>
              </div>
              <div>
                <div className="btn btn-icon rect white btn-google">
                  <img src="img/google.svg" alt="" />
                  Google
                </div>
              </div>
              <div className="close">
                <img src="img/close-icon.png" alt="" />
              </div>
            </div>
            {/* email form */}
            <div className="ct_email">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="Email" />
              <div className="btn rect main btn-next">Tiếp theo</div>
              <div className="back" />
              <div className="close">
                <img src="img/close-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
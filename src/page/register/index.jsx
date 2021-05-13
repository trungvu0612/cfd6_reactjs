import { useState } from "react";

export default function Register() {
  // let [name, setName] = useState('');
  // let [phone, setPhone] = useState('');
  // let [email, setEmail] = useState('');
  // let [link, setLink] = useState('');
  // let [comment, setComment] = useState('');

  let [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    link: "",
    comment: "",
  });

  let [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    link: "",
    comment: "",
  });

  function onSubmit() {
    let errorObj = {};
    form.name.trim().replace(/ +/g, "");
    if (!form.name.trim()) {
      errorObj.name = "Thông tin này là bắt buộc.";
    }
    if (!form.phone.trim()) {
      errorObj.phone = "Thông tin này là bắt buộc.";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
      errorObj.phone = "Sai giá trị";
    }
    if (!form.email.trim()) {
      errorObj.email = "Thông tin này là bắt buộc.";
    } else if (
      !/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(
        form.email
      )
    ) {
      errorObj.email = "Đây không phải link email.";
    }
    if (!form.link.trim()) {
      errorObj.link = "Thông tin này là bắt buộc.";
    } else if (
      !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
        form.link.trim()
      )
    ) {
      errorObj.link = "Đây không phải link facebook";
    }
    if (Object.keys(errorObj).length === 0) {
      console.log(form);
    } else {
      setError(errorObj);
    }
  }
  function inputOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <div className="form">
              <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  value={form.name}
                  name="name"
                  onChange={inputOnChange}
                  type="text"
                  placeholder="Họ và tên bạn"
                />
                {error.name && <p className="error-text">{error.name}</p>}
              </label>
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  value={form.phone}
                  name="phone"
                  onChange={inputOnChange}
                  type="text"
                  placeholder="Số điện thoại"
                />
                {error.phone && <p className="error-text">{error.phone}</p>}
              </label>
              <label>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  value={form.email}
                  name="email"
                  onChange={inputOnChange}
                  type="text"
                  placeholder="Email của bạn"
                />
                {error.email && <p className="error-text">{error.email}</p>}
              </label>
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  value={form.link}
                  name="link"
                  onChange={inputOnChange}
                  type="text"
                  placeholder="https://facebook.com"
                />
                {error.link && <p className="error-text">{error.link}</p>}
              </label>
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  value={form.comment}
                  name="comment"
                  onChange={inputOnChange}
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
                {error.comment && <p className="error-text">{error.comment}</p>}
              </label>
              <div onClick={onSubmit} className="btn main rect">
                đăng ký
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}

import { useState } from "react";

export default function Contact() {
  let [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    title: "",
  });

  let [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    title: "",
  });

  function onSubmit() {
    let errorObj = {};
    form.name.trim().replace(/ +/g, "");
    if (!form.name.trim()) {
      errorObj.name = "Bắt buộc";
    }
    if (!form.phone.trim()) {
      errorObj.phone = "Bắt buộc";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
      errorObj.phone = "Sai giá trị";
    }
    if (!form.email.trim()) {
      errorObj.email = "Bắt buộc";
    } else if (
      !/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(
        form.email
      )
    ) {
      errorObj.email = "Đây không phải link email.";
    }
    if (!form.website.trim()) {
      errorObj.website = "Bắt buộc";
    } else if (
      !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
        form.website
      )
    ) {
      errorObj.website = "Đây không phải link website.";
    }
    if (!form.title.trim()) {
      errorObj.title = "Bắt buộc";
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
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
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
            <p>Số điện thoại</p>
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
            <p>Website</p>
            <input
              value={form.website}
              name="website"
              onChange={inputOnChange}
              type="text"
              placeholder="Đường dẫn website http://"
            />
            {error.website && <p className="error-text">{error.website}</p>}
          </label>
          <label>
            <p>
              Tiêu đề<span>*</span>
            </p>
            <input
              value={form.title}
              name="title"
              onChange={inputOnChange}
              type="text"
              placeholder="Tiêu đề liên hệ"
            />
            {error.title && <p className="error-text">{error.title}</p>}
          </label>
          <label>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea name id cols={30} rows={10} defaultValue={""} />
          </label>
          <div onClick={onSubmit} className="btn main rect">
            đăng ký
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

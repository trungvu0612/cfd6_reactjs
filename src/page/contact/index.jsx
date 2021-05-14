import { useState } from "react";
import useValidateForm from "../../hook/useValidateForm";

export default function Contact() {
  // let [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   website: "",
  //   title: "",
  // });

  // let [error, setError] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   website: "",
  //   title: "",
  // });

  let { form, error, inputOnChange, check } = useValidateForm(
    {
      // lấy ra những input cần được set rule.
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
    },
    {
      // đặt rule cho từng input cần được set.
      rule: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        website: {
          required: true,
          pattern: "website",
        },
        title: {
          required: true,
        },
      },
      message: {
        name: {
          required: "Họ và tên không được để trống",
        },
        phone: {
          required: "Số điện thoại không được để trống",
          pattern: "Số điện thoại không xác định được",
        },
        email: {
          required: "Email không được để trống",
          pattern: "Đây không phải link email",
        },
        website: {
          required: "Link website không được để trống",
          pattern: "Đây không phải là link website",
        },
        title: {
          required: true,
        },
      },
    }
  );
  // submit nếu không có giá trị thì console.log form
  function onSubmit() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      console.log(form);
    }
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

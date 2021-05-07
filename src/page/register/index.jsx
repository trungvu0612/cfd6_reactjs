import { useState } from "react";

export default function Register(){
  
  // let [name, setName] = useState('');
  // let [phone, setPhone] = useState('');
  // let [email, setEmail] = useState('');
  // let [link, setLink] = useState('');
  // let [comment, setComment] = useState('');

  let [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    link: '',
    comment: ''
  })

  function onSubmit() {
    if(!form.name){
      alert("Bắt buộc")
      return
    }
    if(!form.phone){
      alert("Bắt buộc")
      return
    }
    if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
      alert("Sai giá trị")
      return
    }
    if(!form.email){
      alert("Bắt buộc")
      return
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
      alert("Đây không phải link email.")
      return
    }
    if(!form.link){
      alert("Bắt buộc")
      return
    }
    if(!/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(form.link)){
      alert("Đây không phải link facebook")
      return
    }
  }
  function inputOnChange(e) {
    let name = e.target.name
    let value = e.target.value
    setForm({
      ...form,
      [name]: value
    })
  }
    return (
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
              </div>
              <div className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input value={form.name} name="name" onChange={inputOnChange} type="text" placeholder="Họ và tên bạn" />
                </label>
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input value={form.phone} name="phone" onChange={inputOnChange} type="text" placeholder="Số điện thoại" />
                </label>
                <label>
                  <p>Email<span>*</span></p>
                  <input value={form.email} name="email" onChange={inputOnChange} type="text" placeholder="Email của bạn" />
                </label>
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input value={form.link} name="link" onChange={inputOnChange} type="text" placeholder="https://facebook.com" />
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
                  <input value={form.comment} name="comment" onChange={inputOnChange} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <div onClick={onSubmit} className="btn main rect">đăng ký</div>
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
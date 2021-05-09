import React from "react";

export default function CourseCFD({ img, name, des, img_avt, teacher }) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={img} alt="" />
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={img_avt} alt="" />
            </div>
            <div className="name">{teacher}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}

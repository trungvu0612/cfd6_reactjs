import React from "react";
import CourseCFD from "./CourseCFD";

export default function CourseOnline() {
  return (
    <div className="list row">
      <CourseCFD
        img="img/img1.png"
        name="Front-end căn bản"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img.png"
        name="React JS"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Vương Đặng"
      />
      <CourseCFD
        img="img/img2.png"
        name="Animation"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img3.png"
        name="Scss, Grunt JS và Boostrap 4"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img4.png"
        name="UX/UI Design"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img5.png"
        name="Web Responsive"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
    </div>
  );
}

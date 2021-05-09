import React from "react";
import CourseCFD from "./CourseCFD";

export default function CourseOffline() {
  return (
    <div className="list row">
      <CourseCFD
        img="img/img6.png"
        name="Fron-end căn bản"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img7.png"
        name="Fron-end nâng cao"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
      <CourseCFD
        img="img/img8.png"
        name="Laravel framework"
        des="One of the best corporate fashion brands in Sydney"
        img_avt="img/avt.png"
        teacher="Trần Nghĩa"
      />
    </div>
  );
}

import CourseList from "../../../component/CourseList";

export default function CourseItem() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <CourseList
              status="da-ket-thuc"
              teacher_avt="img/avt.png"
              title="React JS"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Vương Đặng"
              submit="Đăng ký"
            />
            <CourseList
              status="da-ket-thuc"
              teacher_avt="img/avt.png"
              title="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status="dang-dien-ra"
              teacher_avt="img/avt.png"
              title="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status="dang-dien-ra"
              teacher_avt="img/avt.png"
              title="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status="dang-dien-ra"
              teacher_avt="img/avt.png"
              title="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status="dang-dien-rấ"
              teacher_avt="img/avt.png"
              title="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <CourseList
              status=""
              teacher_avt="img/avt.png"
              title="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status=""
              teacher_avt="img/avt.png"
              title="Front-end nâng cao"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
            <CourseList
              status=""
              teacher_avt="img/avt.png"
              title="Laravel framework"
              description="One of the best corporate fashion brands in Sydney"
              name_teacher="Trần Nghĩa"
              submit="Đăng ký"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

export default function CourseItem({
  course_status,
  thumbnail,
  title,
  short_description,
  teacher,
  submit,
  slug,
}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={`/course${slug}`}>
          <img src={thumbnail.link} alt="" />
          {course_status === "da-ket-thuc" ? (
            <span className="badge b1">Đã kết thúc</span>
          ) : course_status === "dang-dien-ra" ? (
            <span className="badge b2">Đang diễn ra</span>
          ) : (
            <span className="badge b3">Sắp diễn ra</span>
          )}
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" />
                12
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> 100
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
          </div>
          <div className="register-btn">{submit}</div>
        </div>
      </div>
    </div>
  );
}

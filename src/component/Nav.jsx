import ReactDOM from "react-dom";
import { NavLink, useRouteMatch } from "react-router-dom";
import useDelaylinks from "../../src/hook/useDelayLink";

export const Nav = () => {
  let delayLink = useDelaylinks();

  function overlayClick() {
    document.body.classList.remove("menu-is-show");
  }

  return ReactDOM.createPortal(
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <NavLink onClick={delayLink} to="#">
              Đăng nhập
            </NavLink>
            <NavLink onClick={delayLink} to="#">
              Đăng ký
            </NavLink>
          </li>
          <li className="active">
            <NavLink onClick={delayLink} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} exact to="/team">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/course">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="contact">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div class="overlay_nav" onClick={overlayClick}></div>
    </>,
    document.body
  );
};

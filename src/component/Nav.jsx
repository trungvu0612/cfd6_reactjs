import ReactDOM from 'react-dom'
import { NavLink, useRouteMatch } from 'react-router-dom'

export const Nav = () => {
    
    function overlayClick() {
        document.body.classList.remove('menu-is-show')
    }

    return ReactDOM.createPortal(
        <>
        <nav className="nav">
             <ul>
            <li className="li_login">
                 <NavLink to="#">Đăng nhập</NavLink>
                <NavLink to="#">Đăng ký</NavLink>
            </li>
            <li className="active">
                <NavLink exact to="/">Trang chủ</NavLink>
            </li>
            <li>
                <NavLink to="/team">CFD Team</NavLink>
            </li>
            <li>
                <NavLink to="/course">Khóa Học</NavLink>
            </li>
            <li>
                <NavLink to="/project">Dự Án</NavLink>
            </li>
            <li>
                <NavLink to="contact">Liên hệ</NavLink>
            </li>
        </ul>
            </nav>
            <div class="overlay_nav" onClick={overlayClick}></div>
        </>,
        document.body
    )
}
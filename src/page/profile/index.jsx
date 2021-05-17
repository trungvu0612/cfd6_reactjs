import { useContext } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Context } from "../../App";
import Coin from "./component/Coin";
import Info from "./component/Info";
import MyCourse from "./component/MyCourse";
import Payment from "./component/Payment";
import Project from "./component/Project";

export default function Profile() {
  let { path } = useRouteMatch();

  let { login } = useContext(Context);

  if (!login) return <Redirect path="/" />;

  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={login.avatar} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{login.name}</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink exact to={`${path}/`}>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={`${path}/my-course`}>Khóa học của bạn</NavLink>
              <NavLink to={`${path}/project`}>Dự án đã làm</NavLink>
              <NavLink to={`${path}/payment`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route path={`${path}/my-course`} component={MyCourse} />
                <Route path={`${path}/project`} component={Project} />
                <Route path={`${path}/payment`} component={Payment} />
                <Route path={`${path}/coin`} component={Coin} />
                <Route path={path} component={Info} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

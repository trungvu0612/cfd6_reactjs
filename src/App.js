import logo from "./logo.svg";
import "./App.css";
import "./assets/style/custom.scss";
import HomePage from "./page/home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Register from "./page/register";
import Project from "./page/project";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page404 from "./page/page404";
import Team from "./page/team";
import Course from "./page/course";
import Contact from "./page/contact";
import Profile from "./page/profile";
import { Login, Nav } from "./component/";
import Faq from "./page/faq";
import Email from "./page/email";
import Pay from "./page/pay";
import CourseDetail from "./page/coursedetail";
import Coin from "./page/profile/component/Coin";
import React, { useEffect, useState } from "react";
import PrivateRouter from "./component/PrivateRouter";

export let Context = React.createContext({});

function App() {
  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem("login")),
    loginError: null,
  });

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(state.login));
  }, [state.login]);

  async function handleLogin(username, password) {
    try {
      let res = await fetch(
        "https://cfd-reactjs.herokuapp.com/elearning/v4/login",
        {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res = await res.json();
      if (res.data) {
        setState({
          ...state,
          login: res.data,
        });
        return true;
      } else if (res.error) {
        setState({
          ...state,
          loginError: res.error,
        });
      }
    } catch (err) {}

    // .then((res) => {
    //   console.log("res", res);
    // })
    // .catch((err) => {
    //   console.log("err", err);
    // });
    // if (username === "admin@gmail.com" && password === "123456") {
    //   setState({
    //     ...state,
    //     login: {
    //       name: "Vũ Thành Trung",
    //       avatar: "/img/avt.png",
    //     },
    //   });
    // } else {
    //   return "Sai thông tin đăng nhập";
    // }
  }

  function handleLogout() {
    setState({
      ...state,
      login: false,
    });
  }

  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Login />
          <Switch>
            <Route exact path="/" component={HomePage} />{" "}
            <Route path="/register" component={Register} />{" "}
            <PrivateRouter path="/team" component={Team} />{" "}
            <PrivateRouter path="/course" component={Course} />{" "}
            <PrivateRouter path="/project" component={Project} />{" "}
            <PrivateRouter path="/contact" component={Contact} />{" "}
            <PrivateRouter path="/profile" component={Profile} />{" "}
            <Route path="/register" component={Register} />{" "}
            <Route path="/faq" component={Faq} />{" "}
            <Route path="/email" component={Email} />{" "}
            <Route path="/pay" component={Pay} />{" "}
            <Route path="/coin" component={Coin} />{" "}
            <Route path="/course-details" component={CourseDetail} />{" "}
            <Route component={Page404} />{" "}
          </Switch>{" "}
          <Footer />
        </div>{" "}
      </BrowserRouter>{" "}
    </Context.Provider>
  );
}

export default App;

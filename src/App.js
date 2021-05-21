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
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Login />
          <Switch>
            <Route exact path="/" component={HomePage} />{" "}
            <PrivateRouter path="/register" component={Register} />{" "}
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
    </Provider>
  );
}

export default App;

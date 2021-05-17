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
import { Nav } from "./component/";
import Faq from "./page/faq";
import Email from "./page/email";
import Pay from "./page/pay";
import CourseDetail from "./page/coursedetail";
import Coin from "./page/profile/component/Coin";
import React from "react";

export let Context = React.createContext({});

function App() {
  let login = {
    name: "Vũ Thành Trung",
    avatar: "/img/avt.png",
  };

  return (
    <Context.Provider value={{}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={Register} />
            <Route path="/team" component={Team} />
            <Route path="/course" component={Course} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/faq" component={Faq} />
            <Route path="/email" component={Email} />
            <Route path="/pay" component={Pay} />
            <Route path="/coin" component={Coin} />
            <Route path="/course-details" component={CourseDetail} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

import { endpoint } from "./config";

const Auth = {
  login(data) {
    return fetch(`${endpoint}/elearning/v4/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()); //promise
  },
  register(data, slug) {
    let { token } = JSON.parse(localStorage.getItem("login"));
    console.log(`token`, token);
    return fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/course-register/${slug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  },
  update(data) {
    let { token } = JSON.parse(localStorage.getItem("data"));
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
  },
};
export default Auth;

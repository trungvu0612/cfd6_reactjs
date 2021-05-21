import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";

export default function PrivateRouter(prop) {
  let { login } = useSelector((store) => store.authReducer);
  if (!login) {
    setTimeout(() => {
      document.querySelector(".res").style.display = "flex";
    }, 0);
    return (
      <Route>
        <Redirect path="/" />;
      </Route>
    );
  }

  return <Route {...prop} />;
}

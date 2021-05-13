import React from "react";
import { useHistory } from "react-router";

export default function useDelayLink() {
  let history = useHistory();

  function delayLink(e) {
    e.preventDefault();
    let href = e.currentTarget.getAttribute("href");
    setTimeout(() => {
      history.push(href);
    }, 500);
    document.body.classList.remove("menu-is-show");
  }
  return delayLink;
}

import React from "react";

export default function Founder({ img, name, className }) {
  return (
    <div className="item col-md-6 col-sm-6">
      <div className="wrap">
        <div className="cover">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <p className="title">{className}</p>
        </div>
      </div>
    </div>
  );
}

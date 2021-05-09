import React from "react";

export default function Member({ img, name, className }) {
  return (
    <div className="item col-md-3 col-sm-4 col-xs-6">
      <div className="wrap">
        <div className="cover">
          <span className="text">H</span>
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

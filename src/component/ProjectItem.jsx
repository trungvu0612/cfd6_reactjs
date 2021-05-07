import React from 'react'

export default function ProjectItem(img, title, makeby) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <div className="name">{title}</div>
                    <div className="makeby">{makeby}</div>
                </div>
                </div>
        </a>
    )
}

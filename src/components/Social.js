import React from "react";

export default function Social(props) {
    return (
        <div>
            <a href={props.link} target="_blank">
                <img src={`images/${props.logo}`} className="logo" alt="social links"/>
            </a>
        </div>
    )
}
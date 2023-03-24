import React from "react";
import filled from "../images/star-6.svg";
import empty from "../images/star-8.svg";

function Star(props) {
    return (
        props.toggle ?  <img className="card--favorite" src={filled} onClick={props.onClick}></img> : <img className="card--favorite" src={empty} onClick={props.onClick}></img>
    );
}

export default Star;
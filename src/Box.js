import React from "react";
import "./Box.css";

function Box({backgroundColor, width, height}) {
    return (
        <div className="Box">
            <div className="Box-Color" style={{ backgroundColor, width, height }}></div>
            <button className="Box-Btn">X</button>
        </div>
    );
}

export default Box;
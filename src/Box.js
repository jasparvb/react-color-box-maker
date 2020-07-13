import React from "react";
import "./Box.css";

function Box({id, backgroundColor, width, height, removeBox}) {
    return (
        <div className="Box">
            <div className="Box-Color" style={{ backgroundColor, width, height }}></div>
            <button onClick={() => removeBox(id)} className="Box-Btn">X</button>
        </div>
    );
}

export default Box;
import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Add new box */
    const addBox = box => {
        setBoxes(boxes => [...boxes, box]);
    };
    
    
    /** Remove box */
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const allBoxes = boxes.map(b =>
        <Box 
        key={b.id} 
        id={b.id} 
        width={b.width} 
        height={b.height} 
        backgroundColor={b.backgroundColor} 
        removeBox={removeBox}
        />
    );
    
    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <div className="BoxList-Container">{allBoxes}</div>
        </div>
    );
};

export default BoxList;



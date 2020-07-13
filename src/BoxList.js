import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuid } from "uuid";


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Add new box */
    const addBox = ({width, height, backgroundColor}) => {
        let newBox = <Box key={uuid} width={width} height={height} backgroundColor={backgroundColor}/>;
        setBoxes(boxes => [...boxes, newBox]);
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <div className="BoxList-Container">{boxes}</div>
        </div>
    );
};

export default BoxList;



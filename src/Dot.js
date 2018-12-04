//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";
import Spacer from "./Spacer";

//===========================================
// DOT FUNCTIONAL COMPONENT
//===========================================
const Dot = ({ slideId, dotId }) => (
    <div className="row">
        <Spacer w={5} />
        <div className={"dot " + (slideId === dotId ? "white" : "white50")} />
        <Spacer w={5} />
    </div>
);

export default memo(Dot);

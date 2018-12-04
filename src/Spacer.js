//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";

//===========================================
// SPACER FUNCTIONAL COMPONENT
//===========================================
const Spacer = ({ w, h }) => {
    if (w) {
        return <div style={{ width: w }} className="fullH" />;
    } else if (h) {
        return <div style={{ height: h }} className="fullW" />;
    }
};

export default memo(Spacer);

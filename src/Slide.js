//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";

//===========================================
// STYLES OBJECT
//===========================================
const s = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

//===========================================
// SLIDE FUNCTIONAL COMPONENT
//===========================================
const Slide = ({ position, transition, image }) => {
    return (
        <div className={s.container + " " + position + " " + transition}>
            <img src={image} className={s.slideImage} alt="slide" />
        </div>
    );
};

export default memo(Slide);

//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React from "react";

const s = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

const Slide = props => {
    return (
        <div
            className={
                s.container + " " + props.position + " " + props.transition
            }
        >
            <img src={props.image} className={s.slideImage} alt="slide" />
        </div>
    );
};

export default Slide;

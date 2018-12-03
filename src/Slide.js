//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React from "react";

const s = {
    container: "abs fullW fullH transition1",
    slideImage: "fullH fullW imgCover"
};

const Slide = props => (
    <div className={s.container + " " + props.position}>
        <img src={props.image} className={s.slideImage} alt="slide" />
    </div>
);

export default Slide;

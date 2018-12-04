//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";
import Dot from "./Dot";

//===========================================
// STYLE OBJECT
//===========================================
const s = {
    container: "fullW height70 abs bot0 fCenter black50"
};

//===========================================
// DOTS FUNCTIONAL COMPONENT
//===========================================
const Dots = ({ slideId, slides }) => {
    return (
        <div className={s.container}>
            <div className="row">
                {slides.map((slide, id) => (
                    <Dot slideId={slideId} dotId={id} key={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(Dots);

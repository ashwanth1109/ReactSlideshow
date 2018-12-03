//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slide from "./Slide";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw"
};

//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    render() {
        return (
            <div className={s.container}>
                <Slide image={slide1} position={s.onScreen} />
                <Slide image={slide2} position={s.offScreenRight} />
            </div>
        );
    }
}

export default Slideshow;

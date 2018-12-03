//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./Slideshow";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// APP COMPONENT
//===========================================
class App extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.header}>Automatic Slideshow Carousel</div>
                <div className={s.main}>
                    <Slideshow />
                </div>
                <div className={s.footer}>Built in React - by Ashwanth A R</div>
            </div>
        );
    }
}

export default App;

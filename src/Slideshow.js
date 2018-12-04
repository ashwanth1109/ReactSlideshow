//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slide from "./Slide";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition2l"
};

//===========================================
// SLIDES ARRAY
//===========================================
const slides = [slide1, slide2, slide3, slide4];

//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: {
                id: 0,
                position: s.onScreen,
                transition: true
            },
            next: {
                id: 1,
                position: s.offScreenRight,
                transition: true
            }
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    startCarousel = () => {
        setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    transitionSlides = () => {
        const { current, next } = this.state;
        if (current["position"] === s.onScreen) {
            current["position"] = s.offScreenLeft;
            next["position"] = s.onScreen;
        } else {
            current["position"] = s.onScreen;
            next["position"] = s.offScreenLeft;
        }
        this.setState({
            current: current,
            next: next
        });
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 2000);
    };

    resetSlideOffScreen = () => {
        const { current, next } = this.state;
        if (current["position"] === s.offScreenLeft) {
            current["transition"] = false;
            current["position"] = s.offScreenRight;
            current["id"] = next.id + 1 === slides.length ? 0 : next.id + 1;
        } else {
            next["transition"] = false;
            next["position"] = s.offScreenRight;
            next["id"] = current.id + 1 === slides.length ? 0 : current.id + 1;
        }
        this.setState({
            current: current,
            next: next
        });
        setTimeout(() => {
            current["transition"] = true;
            next["transition"] = true;
            this.setState({
                current: current,
                next: next
            });
        }, 500);
    };

    render() {
        const { current, next } = this.state;
        return (
            <div className={s.container}>
                <Slide
                    image={slides[current.id]}
                    position={current.position}
                    transition={current.transition ? s.transition : ""}
                />
                <Slide
                    image={slides[next.id]}
                    position={next.position}
                    transition={next.transition ? s.transition : ""}
                />
            </div>
        );
    }
}

export default Slideshow;

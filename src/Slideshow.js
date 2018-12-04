//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slide from "./Slide";
import Dots from "./Dots";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};

//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: {
                id: 0,
                position: s.onScreen,
                transition: true
            },
            slide2: {
                id: 1,
                position: s.offScreenRight,
                transition: true
            },
            currentId: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    transitionSlides = () => {
        const { slide1, slide2 } = this.state;
        let currentId;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
            slide2["position"] = s.onScreen;
            currentId = slide2.id;
        } else {
            slide1["position"] = s.onScreen;
            slide2["position"] = s.offScreenLeft;
            currentId = slide1.id;
        }
        this.setState({
            slide1: slide1,
            slide2: slide2,
            currentId: currentId
        });
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 2000);
    };

    resetSlideOffScreen = () => {
        const { slide1, slide2 } = this.state;
        const { slides } = this.props;
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
            slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = s.offScreenRight;
            slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        }
        this.setState({
            slide1: slide1,
            slide2: slide2
        });
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setState({
                slide1: slide1,
                slide2: slide2
            });
        }, 500);
    };

    render() {
        const { slide1, slide2, currentId } = this.state;
        const { slides } = this.props;
        return (
            <div className={s.container}>
                <Slide
                    image={slides[slide1.id]}
                    position={slide1.position}
                    transition={slide1.transition ? s.transition : ""}
                />
                <Slide
                    image={slides[slide2.id]}
                    position={slide2.position}
                    transition={slide2.transition ? s.transition : ""}
                />
                <Dots slideId={currentId} slides={slides} />
            </div>
        );
    }
}

export default Slideshow;

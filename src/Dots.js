import React, { Component } from "react";
import Spacer from "./Spacer";

const s = {
    container: "fullW height70 abs bot0 fCenter black50",
    dots: "row"
};

const Dot = props => (
    <div className={s.dots}>
        <Spacer w={5} />
        <div
            className={
                "dot " + (props.slideId === props.dotId ? "white" : "white50")
            }
        />
        <Spacer w={5} />
    </div>
);

class Dots extends Component {
    render() {
        const { slideId, slides } = this.props;
        return (
            <div className={s.container}>
                <div className={s.dots}>
                    {slides.map((slide, id) => (
                        <Dot slideId={slideId} dotId={id} key={id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Dots;

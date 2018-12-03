import React, { Component } from "react";

class Spacer extends Component {
    render() {
        const { w, h } = this.props;
        if (w) {
            return <div style={{ width: w }} className="fullH" />;
        } else if (h) {
            return <div style={{ height: h }} className="fullW" />;
        }
    }
}

export default Spacer;

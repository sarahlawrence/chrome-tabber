import React from "react";

export default class Background extends React.Component {
  render() {
    const { imageUrl } = this.props;
    const divStyle = {
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundImage: "url(" + imageUrl + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return <div style={divStyle}>{this.props.children}</div>;
  }
}

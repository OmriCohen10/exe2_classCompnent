import React from "react";
import "./buttons.css";
export default class Buttons extends React.Component {
  state = {
    color: "white",
  };

  changeBgColor = (color) => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <>
        <h1>EXE_2 - Q1</h1>
        <div id="buttons" style={{ backgroundColor: this.state.color }}>
          <button onClick={() => this.changeBgColor("red")}>red</button>
          <button onClick={() => this.changeBgColor("orange")}>orange</button>
          <button onClick={() => this.changeBgColor("yellow")}>yellow</button>
          <button onClick={() => this.changeBgColor("blue")}>blue</button>
          <button onClick={() => this.changeBgColor("green")}>green</button>
          <button onClick={() => this.changeBgColor("pink")}>pink</button>
          <button onClick={() => this.changeBgColor("gold")}>gold</button>
          <button onClick={() => this.changeBgColor("gray")}>gray</button>
        </div>
      </>
    );
  }
}

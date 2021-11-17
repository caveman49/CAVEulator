import React from "react";
// import { Component } from "react";

class Button extends React.Component {
  render() {
    return (
      // <div className="button"></div>;
      <div className="operators">
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
        <button>CLEAR</button>
      </div>
    );
  }
}
export default Button;

import React, { Component } from "react";
import TestSubComponent from "./test-sub-component.js";
  
const testStyle = {
  color: "black"
};

class ChatSectionComponent extends Component {
  render() {
    return (
      <div className="chat-compo-div">
        <p> &nbsp; &nbsp; &nbsp; I am chat section component and child component !!</p>
        <div style={testStyle}>
          <TestSubComponent />
        </div>

      </div>
    )
  }
}
export default ChatSectionComponent;
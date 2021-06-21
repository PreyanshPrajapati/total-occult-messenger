import React, { Component } from "react";
import RegionSelectorComponent from "./region-selector-component.js";
import ChatSectionComponent from "./chat-section-component.js";
import TypeMessageComponent from "./type-message-component.js";
import TestSubComponent from "./test-sub-component";
import "../styling/app.css";



class RootComponent extends Component { 
  render() {
    return (
      <div className="main-div">
        <p>Hello world I am root component !! parent component</p>

        <div className="region-main-div">
          <RegionSelectorComponent>
              <TestSubComponent />
          </RegionSelectorComponent>
        </div>

        <div className="chat-main-div">
          <ChatSectionComponent />
        </div>

        <div className="type-msg-main-div">
          <TypeMessageComponent />
        </div>
      </div>
    )
  }
}
export default RootComponent;
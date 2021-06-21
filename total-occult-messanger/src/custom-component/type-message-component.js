import React ,{Component} from "react";
import TestSubComponent from "./test-sub-component.js";

class TypeMessageComponent extends Component {  
  render(){  
    return(     
      <div className = "type-msg-compo-div">  
         <p> &nbsp; &nbsp; &nbsp;  I am Type Message Component and child component !!</p>        

         <TestSubComponent />
      </div>
    )
  }
}
export default TypeMessageComponent;
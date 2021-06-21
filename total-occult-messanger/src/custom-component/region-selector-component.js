import React ,{Component} from "react";
import TestSubComponent from "./test-sub-component.js";

class RegionSelectorComponent extends Component {  
  render(){  
    return(     
      <div className = "region-compo-div">  
        <p> &nbsp; &nbsp; &nbsp;  I am region selector component and child component </p>        
        <TestSubComponent />
      </div>
    )
  }
}
export default RegionSelectorComponent;
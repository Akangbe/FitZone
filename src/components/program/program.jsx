import React from "react";
import "./program.css";
// import {programsData} from "../../data/programsData"
import {programsData} from "../../data/programsData"
const program = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span className="">Programs</span>
        <span className="stroke-text">to shape your body</span>
      </div>


      
     <div className="program-categories">
      {programsData.map((program)=>(
        <div className="category" >

{program.image} 
<span >{program.heading}</span>
<span >{program.details}</span>
<div></div>
</div>
      ))}

     </div>
    </div>
  );
};

export default program;

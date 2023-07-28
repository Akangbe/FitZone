import React, { useState } from "react";
import "./Testimonial.css"
import { testimonialsData } from "../../data/testimonialsData";
import left from "../../assets/leftArrow.png"
import right from "../../assets/rightArrow.png"
const Testimonial = ()=> {

  const [selected, Setselected]=useState(0)
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonial">
      <div className="left-t">
        <span>Testimonial</span>
        <span className="stroke-text">Why should choose us</span>
        <span>Say about us</span>
        <span>
          {testimonialsData[0].review}
       
        <span style={{color: "var(--orange"}}>
          {testimonialsData[selected].name}
        </span>{" "}
        -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" srcset="" />
        <div className="arrows">
          <img 
          onClick={()=>{
            selected===0 ? Setselected(tLength-1) :Setselected((prev)=>prev-1)
          }} src={left} alt="" />
          <img 
          onClick={()=>{
            selected===tLength -1 ? selected(0):Setselected((prev)=>prev+1)
          }}
          src={right} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Testimonial
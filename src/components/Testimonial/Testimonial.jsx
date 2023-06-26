import React, { useState } from "react";
import "./Testimonial.css"
import { testimonialsData } from "../../data/testimonialsData";
import "../../assets/leftArrow.png"
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
        </span>
        <span style={{color: "var(--orange"}}>
          {testimonialsData[selected].name}
        </span>
        {testimonialsData[selected].status}
      </div>
      <div className="right-t">
        <img src={testimonialsData[selected].image} alt="" srcset="" />
        <div className="arrow">
          <img src={left} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Testimonial
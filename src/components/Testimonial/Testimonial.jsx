import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import left from "../../assets/leftArrow.png";
import right from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonial = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, Setselected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonial" id="Testimonial">
      <div className="left-t">
        <span>Testimonial</span>
        <span className="stroke-text">Why should choose us</span>
        <span>Say about us</span>
        <span>
          {testimonialsData[selected].review}
          <div>
            <span style={{ color: "var(--orange" }}>
              {testimonialsData[selected].name}
            </span>
            <div
            //  style={{ "margin-top": "-.6rem", "margin-bottom": "1.8rem" }}
             >
              {" "}
              -{testimonialsData[selected].status}
            </div>
          </div>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" srcset="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? Setselected(tLength - 1)
                : Setselected((prev) => prev - 1);
            }}
            src={left}
            alt=""
            className="f-arrow"
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? selected(0)
                : Setselected((prev) => prev + 1);
            }}
            src={right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;

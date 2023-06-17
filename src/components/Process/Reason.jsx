import React from "react";
import "./Reason.css";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";

function Reason() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="logo" />
        <img src={image2} alt="logo" />
        <img src={image3} alt="fitnesslogo" />
        <img src={image4} alt="img" />
      </div>
      <div className="right-r">
        <span>Some Reason</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>100+ Expert Coauch</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>30% Discount for New Memeber</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable partner</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Positive Result</span>
          </div>
        </div>
        <span style={{ fontWeight: "bold", color: "var( --lightgray)" }}>
          OUR PARTNERS
        </span>
        <div className="partner">
          <img src={nike} alt="" />
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reason;

import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./plan.css";
function plans(props) {
  return (
    <div className="plans-container">
      <div className="blur planblur-1" ></div>
      <div className="blur planblur-2"></div>
      <div className="programs-header">
        <span>Ready To start</span>
        <span className="stroke-text">Your Journey</span>
        <span>Now within us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" srcset="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
         </div>
              <div>
                <span>see more benefits </span>
              </div>
           
              <button className="btn">Join Now </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default plans;

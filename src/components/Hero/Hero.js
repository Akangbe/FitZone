import React from "react";
import "./Hero.css";
import "../Header/Header.jsx";
import { motion } from "framer-motion";
import Header from "../Header/Header.jsx";
// import Heart from ""
import Heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import hero_imagemain from "../../assets/heromain.png";
import hero_image from "../../assets/hero_image.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  const transition = {
    type: "spring",
    duration: 3,
  };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Header />
        <div className="the-best-ads">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            // transition={{...transition, type="tween"}}
            // transition={{ ...transition, type: "tween" }}

            animate={{ pathLength: 1 }}
            transition={{ duration: 2, type: "tween" }}
          ></motion.div>

          <span>the best fitness Gym in the Town</span>
        </div>
        <div>
          <div className="hero-text">
            <span className="stroke-text">Achieve The </span>
            <span>Body </span>
            <span>You desire</span>
            <div className="span-text">
              <span className="">
                In order to achieve the desired body shape, it is important to
                establish a consistent exercise routine that targets specific
                muscle groups and helps to burn excess body fat. This can
                include activities such as weightlifting, cardio exercises, and
                high-intensity interval training (HIIT). Additionally, it is
                important to maintain a balanced and nutritious diet that
                provides the body with the necessary nutrients for optimal
                health and fitness.
              </span>
            </div>
          </div>
          <div className="figures">
            <div>
              <span>+20</span>
              <span>expert instructor</span>
            </div>
            <div>
              <span>+100</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+20</span>
              <span>fitness programs</span>
            </div>
          </div>
          <div className="hero-btns">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>121 bpm</span>
        </motion.div>
        {/* Hero image */}
        <img src={hero_imagemain} className="hero_image" alt="" />
        {/* calories */}
      </div>
    </div>
  );
};
export default Hero;

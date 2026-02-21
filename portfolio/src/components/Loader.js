import React from "react";
import Lottie from "lottie-react";
import animationData from "../data/ChasquidoQik.json";
import "../css/Loader.css";

const Loader = ({ onComplete }) => {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        <Lottie
          animationData={animationData}
          loop={false}
          onComplete={onComplete}
          style={{ width: 160, height: 160 }}
        />
      </div>
      <div className="loader-footer">
        <p className="loader-name">Eng. Mansoor Gabali</p>
        <h3 className="loader-tagline">Software Engineer & Full-Stack Developer</h3>
      </div>
    </div>
  );
};

export default Loader;

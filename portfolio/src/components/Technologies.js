import React, { useState } from "react";
import IMAGES from "../data/images.js";
import "../css/TechnologiesFuturistic.css";

const Technologies = () => {
  // Track which ball is animating
  const [active, setActive] = useState(null);

  // Handle click: trigger animation for this ball
  const handleClick = (id) => {
    setActive(id);
    setTimeout(() => setActive(null), 600); // Animation duration
  };

  return (
    <div>
      <h2 className="tech-heading">Technologies & Languages That Drive My Development Journey</h2>
      <h3 className="tech-subheading">Click a Ball!</h3>
      <div className="svg-ball-grid">
        {IMAGES.map((img) => (
          <div
            key={img.id}
            className={`svg-ball${active === img.id ? " animate" : ""}`}
            onClick={() => handleClick(img.id)}
            title={img.title}
          >
            <img src={img.image} alt={img.title} className="svg-ball-img" />
            <div className="svg-ball-label">{img.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
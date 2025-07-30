import React from "react";
import DataCourses from "../data/DataCourses";
import "../css/Courses.css";
import { motion } from "framer-motion";

const Courses = () => {

  const sortedCourses = [...DataCourses].sort((a, b) => b.id - a.id);

  return (
    <div style={{ margin: "20px" }}>

      <motion.div 
        className="qualifications-header"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Courses and Projects</h2>
        <div className="header-line"></div>
      </motion.div>

      <div>
        {sortedCourses.map((DATAcourse) => (
          <Project key={DATAcourse.id} projectPARAM={DATAcourse} />
        ))}
      </div>
    </div>
  );
};

// const Project = (props) => {
//   const { title, description, link, image, target } = props.projectPARAM; // this line to take every proprities from project PARAMETER of Data loop

//   return (
//     <div className="card">
//       <img src={image} alt="Course" style={{ width: "90%" }} />
//       <h3 style={{ color: "white", fontSize: 20, padding: 30}}>{title}</h3>
//       <p style={{ fontSize: 15, padding:20 }}>{description}</p>
//       <a href={link} target={target || "_self"} rel="noopener noreferrer"> 
//         <button>Visit</button>
//       </a> 
//     </div> // or you can use <button onClick={() => window.open(link, "_blank")}>  Visit </button>, to open new window 
//      // to be in the same window when you click the button easily just do that , <button onClick={() => window.location.href = link;
//   );
// };

const Project = (props) => {
  const { title, description, link, image, target } = props.projectPARAM;

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <a href={link} target={target || "_self"} rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-footer">
          <a href={link} target={target || "_self"} rel="noopener noreferrer" className="project-button">
            <span>Visit Project</span>
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;

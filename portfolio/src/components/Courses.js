import React from "react";
import DataCourses from "../data/DataCourses";

const Courses = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ margin: "15px" }}>My Courses and Projects</h2>
      <div>
        {DataCourses.map((DATAcourse) => (
          <Project key={DATAcourse.id} projectPARAM={DATAcourse} />
        ))}
      </div>
    </div>
  );
};

const Project = (props) => {
  const { title, description, link, image, target } = props.projectPARAM; // this line to take every proprities from project PARAMETER of Data loop

  return (
    <div className="card">
      <img src={image} alt="Course" style={{ width: "90%" }} />
      <h3 style={{ color: "white", fontSize: 20, padding: 30}}>{title}</h3>
      <p style={{ fontSize: 15, padding:20 }}>{description}</p>
      <a href={link} target={target || "_self"} rel="noopener noreferrer"> 
        <button>Visit</button>
      </a> 
    </div> // or you can use <button onClick={() => window.open(link, "_blank")}>  Visit </button>, to open new window 
     // to be in the same window when you click the button easily just do that , <button onClick={() => window.location.href = link;
  );
};

export default Courses;

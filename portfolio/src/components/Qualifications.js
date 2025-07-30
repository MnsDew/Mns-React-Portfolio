// Qualifications.js
import React from "react";
import { motion } from "framer-motion";
import "../css/Qualifications.css";

const Qualifications = () => {
  const qualifications = [
    {
      title: "Software Engineering Student",
      company: "Altinbas University",
      location: "Türkiye, Istanbul",
      link: "https://altinbas.edu.tr/",
      icon: "🎓",
      description: "Senior Year (4th Year) Student",
      color: "#6a5acd",
      gradient: "linear-gradient(135deg, #6a5acd, #483d8b)"
    },
    {
      title: "AI Prompt Engineer",
      company: "Outlier Company",
      location: "Remote",
      link: "https://outlier.ai/",
      icon: "🤖",
      description: "AI Trainer & Prompt Specialist",
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b, #ff4757)"
    },
    {
      title: "English Teacher",
      company: "English Time School",
      location: "Istanbul",
      link: "https://www.englishtime.com/en",
      icon: "📚",
      description: "Part-time English Teacher",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #2ecc71)"
    }
  ];

  return (
    <motion.div 
      className="qualifications-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="qualifications-header"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Qualifications & Experience</h2>
        <div className="header-line"></div>
      </motion.div>

      <div className="qualifications-grid">
        {qualifications.map((qual, index) => (
          <motion.div
            key={index}
            className="qualification-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: `0 0 20px ${qual.color}40`
            }}
          >
            <div className="card-content">
              <div className="icon-container" style={{ background: qual.gradient }}>
                <span className="icon">{qual.icon}</span>
              </div>
              
              <h3>{qual.title}</h3>
              <p className="company">{qual.company}</p>
              <p className="description">{qual.description}</p>
              <p className="location">{qual.location}</p>
              
              <motion.a 
                href={qual.link}
                target="_blank"
                rel="noopener noreferrer"
                className="futuristic-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ background: qual.gradient }}
              >
                <span className="button-content">
                  <span className="button-text">Explore</span>
                  <span className="button-icon">
                    <span className="arrow">→</span>
                    <span className="glow"></span>
                  </span>
                </span>
                <span className="button-border"></span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Qualifications;

// import React from "react";

// const Qualifications = () => {
//   return (
//     <div>
//       <hr style={{
//         height: "7px", 
//         border: "none", 
//         background: "linear-gradient(to right, #6a5acd, #483d8b, #6a5acd)", 
//         borderRadius: "5px",
//         margin: "20px auto",
//         width: "80%"
//       }} /> 
  
//     <div className="container mt-5 text-white text-center ">
//       <h2 className="mb-4 fw-bold text-white">My Qualifications and Experiences</h2>

//       <div className="row justify-content-center">
//         {/* Software Engineering Student */}
//         <div className="col-md-8 mb-4">
//           <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
//             <div className="card-body">
//               <h4 className="card-title text-info">Software Engineering Student</h4>
//               <a href="https://altinbas.edu.tr/" target="_blank" className="text-warning text-decoration-none">
//                 Altinbas University, Türkiye, Istanbul
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* AI Prompt Engineer */}
//         <div className="col-md-8 mb-4">
//           <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
//             <div className="card-body">
//               <h4 className="card-title text-info">AI Prompt Engineer / AI Trainer</h4>
//               <p className="text-secondary">Outlier Company</p>
//               <ul className="list-unstyled">
//                 <li> Prompt Creation & <br/> Response Evaluation</li>
//               </ul>
//               <a href="https://outlier.ai/" target="_blank" className="text-warning text-decoration-none">
//                 Company Link
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* English Teacher */}
//         <div className="col-md-8 mb-4">
//           <div className="card bg-dark text-white shadow-lg;" style={{ border: "2px solid rgb(83, 83, 199)" }}>
//             <div className="card-body">
//               <h4 className="card-title text-info">English Teacher</h4>
//               <p className="text-secondary">Part-time English Teacher at English Time School, Istanbul.</p>
//               <a href="https://www.englishtime.com/en" target="_blank" className="text-warning text-decoration-none">
//                 English Time Website
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Qualifications;

 // Qualifications.js
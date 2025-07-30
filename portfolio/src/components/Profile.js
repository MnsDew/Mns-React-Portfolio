// import React, { Component } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import profilePic from "../assest/prof.jpg";

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = { displayBio: false };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState((prevState) => ({
//       displayBio: !prevState.displayBio,
//     }));
//   }
  
//   render() {
//     const bioVariants = {
//       hidden: { opacity: 0, y: 20 },
//       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     };
    
//     return (
//       <div style={{ paddingTop: "10px", margin: "30px", width: "100%" }}>
//         <img src={profilePic} className="profile" alt="Profile Picture" />
//         <h1 className="hello-text">
//           Hello!
//         </h1>
//         <h2 style={{paddingBottom:"10px" , paddingTop: "30px", margin: "0px", width: "100%"  }} className="name-text">
//           Mansoor Gabali,</h2> 
//           <h4 style={{ paddingBottom:"40px" , paddingTop: "10px", margin: "0px", width: "100%" }} className="role-text">
//           Software Engineer</h4>
//         <div>
//           <AnimatePresence>
//             {this.state.displayBio && (
//               <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={bioVariants}
//               >
//                 <motion.p variants={bioVariants}>🚀 Software Engineer | Full-Stack Developer</motion.p>
//                 <motion.hr variants={bioVariants} />
//                 <motion.p variants={bioVariants}>
//                   💡 Passionate about building scalable applications, <br />
//                   system architecture, and software design.
//                 </motion.p>
//                 <motion.hr variants={bioVariants} />
//                 <motion.p variants={bioVariants}>
//                   🛠️ Expertise: JavaScript (React, Node.js), Java (Spring),<br />
//                   SQL & NoSQL, AI, and Data Analysis.
//                 </motion.p>
//                 <motion.hr variants={bioVariants} />
//                 <motion.p variants={bioVariants}>
//                   🔍 Focused on: Full-stack development, <br /> software design patterns,
//                 </motion.p>
//                 <motion.button
//                   onClick={this.toggle}
//                   className="btn"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   >
//                   Hide
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {!this.state.displayBio && (
//             <motion.button
//             onClick={this.toggle}
//             className="btn"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             >
//               Show more
//             </motion.button>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
 

/// portfolio/src/components/Profile.js
import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assest/prof.jpg";
import "../css/Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      displayBio: !prevState.displayBio,
    }));
  }
  
  render() {
    const bioVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 1.3,
          ease: "easeOut"
        }
      },
      exit: { 
        opacity: 0, 
        x: 100,
        transition: { 
          duration: 1.2,
          ease: "easeIn"
        }
      }
    };

    const itemVariants = {
      hidden: { 
        opacity: 0, 
        x: -100 
      },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.8, // Each item will be delayed by 0.8s * its index
          duration: 1.2,
          ease: "easeOut"
        }
      })
    };
    

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2
        }
      }
    };
    
    return (
      <motion.div 
        className="profile-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="profile-image-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.10, type: "spring" }}
        >
          <motion.img 
            src={profilePic} 
            className="profile-image" 
            alt="Profile Picture"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="profile-glow"></div>
        </motion.div>

        <motion.h1 
          className="hello-text"
          variants={bioVariants}
        >
          Hello, World! 👋
        </motion.h1>

        <motion.h2 
          className="name-text"
          variants={bioVariants}
        >
          Mansoor Gabali | MNS70
        </motion.h2>

        <motion.h4 
          className="role-text"
          variants={bioVariants}
        >
          Software Engineer & Full-Stack Developer
        </motion.h4>

        <motion.p 
          className="tagline"
          variants={bioVariants}
        >
          Turning ideas into elegant solutions
        </motion.p>

        <AnimatePresence>
          {this.state.displayBio && (
            <motion.div
              className="bio-container"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={bioVariants}
            >
              <div className="bio-content">
    <motion.div 
      className="bio-item" 
      custom={0} // First item
      variants={itemVariants}
    >
      <span className="emoji">🚀</span>
      <p>Software Engineer | Full-Stack Developer</p>
    </motion.div>

    <motion.div 
      className="bio-item" 
      custom={1} // Second item
      variants={itemVariants}
    >
      <span className="emoji">💡</span>
      <p>Committed to delivering scalable, user-centric applications...</p>
    </motion.div>

    <motion.div 
      className="bio-item" 
      custom={2} // Third item
      variants={itemVariants}
    >
      
                  <span className="emoji">🛠️</span>
                  <p>Skilled in building full-stack solutions using JavaScript (React, Node.js), Java (Spring), MySQL, MongoDB, AI tools, and data-driven applications.</p>
                </motion.div>

                <motion.div className="bio-item" custom={3} variants={itemVariants}>
                  <span className="emoji">🔍</span>
                  <p>Specializing in full-stack development, system architecture, SOLID principles, and software design patterns for robust, maintainable code.</p>
                </motion.div>

                <motion.div className="bio-item" custom={4} variants={itemVariants}>
                  <span className="emoji">🌟</span>
                  <p>Always learning, always growing, always coding</p>
                </motion.div>


                <motion.button
                  onClick={this.toggle}
                  className="bio-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(131, 36, 199, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hide
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!this.state.displayBio && (
          <motion.button
            onClick={this.toggle}
            className="bio-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(131, 36, 199, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        )}
      </motion.div>
    );
  }
}

export default Profile;
import React, { Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assest/prof.jpg";

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
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    
    return (
      <div style={{ paddingTop: "10px", margin: "30px", width: "100%" }}>
        <img src={profilePic} className="profile" alt="Profile Picture" />
        <h1 className="hello-text">
          Hello!
        </h1>
        <h2 style={{paddingBottom:"10px" , paddingTop: "30px", margin: "0px", width: "100%"  }} className="name-text">
          Mansoor Gabali,</h2> 
          <h4 style={{ paddingBottom:"40px" , paddingTop: "10px", margin: "0px", width: "100%" }} className="role-text">
          Software Engineer</h4>
        <div>
          <AnimatePresence>
            {this.state.displayBio && (
              <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={bioVariants}
              >
                <motion.p variants={bioVariants}>🚀 Software Engineer | Full-Stack Developer</motion.p>
                <motion.hr variants={bioVariants} />
                <motion.p variants={bioVariants}>
                  💡 Passionate about building scalable applications, <br />
                  system architecture, and software design.
                </motion.p>
                <motion.hr variants={bioVariants} />
                <motion.p variants={bioVariants}>
                  🛠️ Expertise: JavaScript (React, Node.js), Java (Spring),<br />
                  SQL & NoSQL, AI, and Data Analysis.
                </motion.p>
                <motion.hr variants={bioVariants} />
                <motion.p variants={bioVariants}>
                  🔍 Focused on: Full-stack development, <br /> software design patterns,
                </motion.p>
                <motion.button
                  onClick={this.toggle}
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  >
                  Hide
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          {!this.state.displayBio && (
            <motion.button
            onClick={this.toggle}
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              Show more
            </motion.button>
          )}
        </div>
      </div>
    );
  }
}
 

export default Profile;

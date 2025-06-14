import React, { useRef } from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../css/index.css";
import Courses from "./Courses";
import SocialContact from "./SocialContact";
import Title from "./Title";

export const SocialContactRefContext = React.createContext(null);

function App() {
  const socialContactRef = useRef();

  return (
    <SocialContactRefContext.Provider value={socialContactRef}>
      <div>
        <div className="row">
          <Title/>
           
          <div className="column">
            <Profile />
          </div>
           
          <div className="column">
            <Qualifications />
          </div>
        </div>
        <hr></hr>
        <Courses/>
        <hr></hr>
        <div id="contact-section">
          <SocialContact ref={socialContactRef} />
        </div>
      </div>
    </SocialContactRefContext.Provider>
  );
}

export default App;

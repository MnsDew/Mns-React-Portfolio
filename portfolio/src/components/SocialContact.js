import CONTACTS_DATA from "../data/ContactsData";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import emailjs from "emailjs-com";
import ContactCard from "./ContactCard";

//  const SocialContact = () =>{

//     return (
//   <div style={{textAlign:"center"}}>
//     <h2 style={{textDecorationColor:"ActiveBorder"}}>Contact Me</h2>
//     <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}> 
// {CONTACTS_DATA.map((PROFILE) => (
//     <Contact key ={PROFILE.id} contactPARAm={PROFILE} />
// )


// )}
//    </div>
//   </div>
//     );
//  };


const SocialContact = forwardRef((props, ref) => {
  const [showContact, setShowContact] = useState(false);

  useImperativeHandle(ref, () => ({
    openEmailCard: () => setShowContact(true)
  }));

  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{textDecorationColor:"ActiveBorder"}}>Contact Me</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}> 
        {/* Email Icon that opens Contact Card */}
        <div onClick={() => setShowContact(true)} style={{ cursor: "pointer" }}>
          <img 
            src={require("../assest/email (1).png")} 
            alt="contact" 
            style={{width:"30%", margin: 20}} 
          />
        </div>

        {/* Other Social Links */}
        {CONTACTS_DATA.map((PROFILE) => (
          <Contact key={PROFILE.id} contactPARAm={PROFILE} />
        ))}
      </div>

      {/* Contact Card Modal */}
      {showContact && (
        <ContactCard onClose={() => setShowContact(false)} />
      )}
    </div>
  );
});

const Contact = (props) => {
  const{link , image , target} = props.contactPARAm;

  return(
    <div >
      <a href={link} target={target || "_self"} rel="noopener noreferrer">     
        <img src={image} alt="contact" style={{width:"30%" , margin: 20}} />
      </a>
    </div>
  );
}

export default SocialContact;
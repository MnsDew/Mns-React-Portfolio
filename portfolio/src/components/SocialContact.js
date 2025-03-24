import React from "react";
import CONTACTS_DATA from "../data/ContactsData";


 const SocialContact = () =>{

    return (
  <div style={{textAlign:"center"}}>
    <h2 style={{textDecorationColor:"ActiveBorder"}}>Contact Me</h2>
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}> 
{CONTACTS_DATA.map((PROFILE) => (
    <Contact key ={PROFILE.id} contactPARAm={PROFILE} />
)


)}
   </div>
  </div>
    );
 };

 const Contact = (props) => {
    const{link , image , target} = props.contactPARAm;

    return(
<div >
<a href={link} target={target || "_self"} rel="noopener noreferrer">     
<img src={image} alt="contact" style={{width:"15%" , margin: 5}} />
</a>
</div>
    );
 }

 export default SocialContact;
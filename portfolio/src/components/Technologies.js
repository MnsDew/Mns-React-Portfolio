 import React from "react";
 import IMAGES from "../data/images.js";
 import ImageShadow from "react-image-shadow";
 import "react-image-shadow/assets/index.css";

 const Technologies = () => {
    return(
        <div> 
          <h2 className="tech-heading">Technologies & Languages That Drive My Development Journey</h2>
          <h3 className="tech-heading">Here’s What’s Under the Hood 🛠️</h3>
       {IMAGES.map(imageObject => { //we are moving through the map function
        return <Image key= {imageObject.id} src={imageObject.image} desc={imageObject.description}/>
       })}
        </div>
    )
 }
 const Image = ({src , desc}) => { // we need to get them as input parameters , deconstruct way 
    // or inside (props) and down write src,desc WAY2 
    // we use a or <a/> element to be clickable 
    // and we get the paramaters from the other component 
    return (
        <div className="technologies">
     <a target="_blank" rel="" href={src}>
        <ImageShadow className ="image-shadow"src={src}/></a>
        <p>{desc}</p>
        </div>
    )
 }

 export default Technologies;
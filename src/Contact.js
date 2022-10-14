import React from "react";
import brownWhite from './images/brown-white.jpg';
import mailIcon from './images/mail-icon.png';
import phoneIcon from './images/phone-icon.png';
import brownYellow from './images/brown-yellow.webp';
import brownImage from './images/brown.jpg'




export default function Contact (props) {
  return (
    <div className="contacts">
      <div className="contact-card">
         <img 
           src={props.img}
           alt="cat image"
           width={200}
           className="brown-whitecat"
         />
         <h3 className="wiz">{props.name}</h3>
         <div className="info-group">
          <img 
           src={phoneIcon}
           alt="phone image"
           width={40}
         />
         <h3>{props.phone}</h3>
      </div>
      <div className="info-group">
      <img 
           src={mailIcon}
           alt="mail image"
           width={40}
         />
         <h3>{props.email}</h3>
      </div>
      </div>
      
      
    </div>

  )
  
}

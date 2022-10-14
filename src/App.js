import React from 'react';
import Navbar from './Contact';
import Contact from './Contact';
import brownWhite from './images/brown-white.jpg';
import mailIcon from './images/mail-icon.png';
import phoneIcon from './images/phone-icon.png';
import brownYellow from './images/brown-yellow.webp';
import brownImage from './images/brown.jpg'

export default function App () {
  return (
    <div className="contacts">
      
      <Contact 
      img={brownWhite}
      name="Mr Whiskerson"
      phone="(212) 555-1234"
      email="Mr.whiskaz@gmail.com"

      />
      <Contact 
      img={brownYellow}
      name="Fluffykins"
      phone="(212) 555-1234"
      email="Fluffykins@gmail.com"
      />
      <Contact 
      img={brownImage}
      name="Felix"
      phone="(212) 555-1234"
      email="Felix@gmail.com"
      />
      
    </div>

    
  )
}


{/* <div className="contact-card">
         <img 
           src={brownWhite}
           alt="cat image"
           width={200}
           className="brown-whitecat"
         />
         <h3 className="wiz">Mr Whiskerson</h3>
         <div className="info-group">
          <img 
           src={phoneIcon}
           alt="phone image"
           width={40}
         />
         <h3>(212) 555-1234</h3>
      </div>
      <div className="info-group">
      <img 
           src={mailIcon}
           alt="mail image"
           width={40}
         />
         <h3>Mr.whiskaz@gmail.com</h3>
      </div>
      </div>



      <div className="contact-card">
         <img 
           src={brownYellow}
           alt="cat image"
           width={200}
           className="brown-whitecat"
         />
         <h3 className="wiz">Fluffykins</h3>
         <div className="info-group">
          <img 
           src={phoneIcon}
           alt="phone image"
           width={40}
         />
         <h3>(212) 555-1234</h3>
      </div>
      <div className="info-group">
      <img 
           src={mailIcon}
           alt="mail image"
           width={40}
         />
         <h3>Fluffykins@gmail.com</h3>
      </div>
      </div>


      <div className="contact-card">
         <img 
           src={brownImage}
           alt="cat image"
           width={200}
           className="brown-whitecat"
         />
         <h3 className="wiz">Felix</h3>
         <div className="info-group">
          <img 
           src={phoneIcon}
           alt="phone image"
           width={40}
         />
         <h3>(212) 555-1234</h3>
      </div>
      <div className="info-group">
      <img 
           src={mailIcon}
           alt="mail image"
           width={40}
         />
         <h3>Felix@gmail.com</h3>
      </div>
      </div> */}



import '../css/headerstyle.css';
//import React from 'react';
//import {aboutmepage} from "../pages/aboutpage";
//import mainpage from "../pages/mainpage";
//import contactmepage from "../pages/contactpage";
//import "./buttons";



function myheader() {
  //let home = mainpage();
 // let about = aboutmepage();
  //let contactme = contactmepage();
  let basicheader = 
  <div id="basic_header">
  
  <h1>
    AMYTIS SAGHAFI
  </h1><h2>
      North Vancouver, British Columbia, V7N2K2 
        (778) 322-3928 | amytis_saghafi@sfu.ca
      
      </h2>
         
      
       <table class="center">
      <tr>
        <td><a href="../pages/mainpage">HOME</a></td>
        <td><a href= "../pages/aboutpage">ABOUT</a></td>
        <td><a href= "../pages/contactpage">CONTACT</a></td>
        <td><a href= "../pages/portfoliopage">PORTFOLIO</a></td>
     
      </tr>
    </table> 

    </div>
  return (
    <div>
      {basicheader}
    </div>
  );
}

export default myheader;
import aboutmepage from "../pages/aboutpage";
import mainpage from "../pages/mainpage";
import contactmepage from "../pages/contactpage";

//let home = mainpage();
//let about = aboutmepage();

class contactlink extends HTMLElement {
   
     connectedCallback() {
      this.innerHTML =  `
        <div>
        <a href= {contactme} > <button> CONTACT </button></a>
        </div>
      `;
  }
  }
  
  customElements.define('contact_button', contactlink);

  class aboutlink extends HTMLElement {
   
    connectedCallback() {
     this.innerHTML =  `
       <div>
       <a href= {contactme} > <button> ABOUT </button></a>
       </div>
     `;
 }
 }
 
 customElements.define('about_button', aboutlink);


 class homelink extends HTMLElement {
   
    connectedCallback() {
     this.innerHTML =  `
    <div>
    <a href= {home} > <button> HOME </button></a>
    </div>
     `;
 }
 }
 
 customElements.define('home_button', homelink);





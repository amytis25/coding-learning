

class Header extends HTMLElement {
  constructor() {
    super();
  }
   connectedCallback() {
    this.innerHTML =  `
	<h1>
    AMYTIS SAGHAFI
  </h1><h2>
      North Vancouver, British Columbia, V7N2K2 <br>
        (778) 322-3928 | amytis_saghafi@sfu.ca
      
      </h2><table class="center">
      <tr colspan="4">
        <th> <a href=".\scripts\home_page.html">HOME</a> </th> 
        
        <th> <a href=".\scripts\about.html"> ABOUT </a> </th> 
        
        <th> <a href=".\scripts\contact.html"> CONTACT </a> </th> 
        
        <th> <a href=".\scripts\portfolio.html"> PORTFOLIO </a> </th> 
     
      </tr>
    </table> 
	`;
}
}

customElements.define('my-header', Header);
document.querySelector('.scroll-container').addEventListener('wheel', function(event) {
  event.preventDefault();
  const scrollAmount = 100;
  
  if (event.deltaY > 0) {
      this.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
      });
  } else {
      this.scrollBy({
          top: -scrollAmount,
          behavior: 'smooth'
      });
  }
});
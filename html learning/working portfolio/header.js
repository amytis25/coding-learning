const myheader = document.createElement('myheader');
    myheader.innerHTML = `
    <div class="myheader">
    <h1>
        AMYTIS SAGHAFI
      </h1><h2>
          North Vancouver, British Columbia, V7N2K2 <br>
            (778) 322-3928 | amytis_saghafi@sfu.ca
          
          </h2>
          <nav>
            <a href=".\scripts\home_page.html">HOME</a> 
            
            <a href=".\scripts\about.html"> ABOUT </a> 
            
            <a href=".\scripts\contact.html"> CONTACT </a> 
            
            <a href=".\scripts\portfolio.html"> PORTFOLIO </a>  
        
          </nav>
        
    </div>
    `;
 
    class CustomHeader extends HTMLElement {
      constructor(){
          super();
  
          const clone = myheader.content.cloneNode(true);
          this.appendChild(clone);
      }
  }
  
  window.customElements.define("custom-header", CustomHeader);

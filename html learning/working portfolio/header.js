import '.\styles\header.css';
function myheader() {
let basic_header = 
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
return (
  <div>
      {basic_header}
    </div>
);
  
}
document.getElementById("myheader").innerHTML = myheader;


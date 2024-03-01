
import welcomeMsg from '../Components/page-comp/welcome';
import myheader from '../Components/header';



function welcomepage() {
  let theheader = myheader();
  let body = welcomeMsg ();
  let page = (
  <div>
    {theheader}
      
    {body}
  </div>
  )
  
  return (
    
     <div>
      {page}
     </div>
    
  );
}

export default welcomepage;
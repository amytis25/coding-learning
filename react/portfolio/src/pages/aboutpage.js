//import myheader from './Components/header';
//import gallery from './Components/pages/mainpage';
import aboutme from '../Components/page-comp/about';
//import contact from './Components/pages/contact';
import myheader from '../Components/header';



function aboutmepage() {
  let theheader = myheader();
  //let body = contact();
  let body = aboutme();
  //let body = gallery ();
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

export default aboutmepage;
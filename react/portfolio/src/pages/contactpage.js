//import myheader from './Components/header';
//import gallery from './Components/pages/mainpage';
//import about from './Components/pages/about';
import contact from '../Components/page-comp/contact';
import myheader from '../Components/header';



function contactmepage() {
  let theheader = myheader();
  let body = contact();
  //let body = about();
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

export default contactmepage;
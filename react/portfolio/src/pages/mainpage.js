
import gallery from '../Components/page-comp/mainpage';

import myheader from '../Components/header';



function mainpage() {
  let theheader = myheader();
 
  let body = gallery ();
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

export default mainpage;

import './css/index.css';

//import myheader from './Components/header';
import welcomepage from './pages/welcomepage';
//import about from './Components/pages/about';
//import contact from './Components/pages/contact';




function App() {
  
  let body = welcomepage ();
  //let body = welcomeMsg();
  let page = (
  <div>
      
    {body}
  </div>
  )
  
  return (
    
     <div>
      {page}
      
     </div>
    
  );
}

export default App;



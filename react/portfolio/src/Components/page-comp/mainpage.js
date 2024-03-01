
import '../../css/gallerystyle.css';


function gallery() {
  let gallery = 
  <div id="bgallery">
  <table>
      <tbody>
      <tr>
        <td> Vlogs </td>
        <td> Photography </td>
        <td> Physical Art Portfolio </td>
        </tr>
      <tr>
        <td>
        <img src= "../../images/vlog_cover.jpg" alt="travel"></img>
        </td>
        <td>
        <img src= "../../images/sky.jpg" alt="sky"></img>
        </td>
        <td>
        <img src= "../../images/Pattern 1.jpg" alt="pattern"></img>
        </td>
    </tr>
      
      
      <tr>
      <td> Coding Portfolio </td>
      <td> Technical Projects </td>
      <td> Digital Art Portfolio  </td>
      </tr>

      <tr>
      <td>
      <img src= "../../images/code.png" alt="code"></img>
      </td>
      <td>
        <img src= "../../images/wires.jpg" alt="wires"></img>
      
      </td>
      <td>
        <img src= "../../images/curly_hair.jpg" alt="curly hair portrait"></img>
      
      </td>
      </tr>
      </tbody>
      </table>
      
      
      </div>
   return (
    <div>
   
      {gallery}
      </div>
     
  );
  
}

export default gallery;
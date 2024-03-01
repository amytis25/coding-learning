import "../../css/about.css";

function aboutme (){
    let page = 
    <div id="about">
<table class= "table_content" >
<tr>
    <td rowspan= "2"> image
     </td>
    
    <th class= "tabletitle"> Hi! My name is Amytis :)
    </th>
</tr>

<tr >
<td class= "table_content">
<p>
Welcome to my page! I'm Amytis Saghafi and I'm a third year engineering science student at Simon Fraser University with a 
concentration in systems engineeering. I created this website not only to showcase my work, like a portfolio, but my hobbies as well. I hope 
this website helps you get to know me better!
</p>
</td>
</tr>
</table>
    </div>
    return(
        <div>
            {page}
        </div>
    );
}
export default aboutme;
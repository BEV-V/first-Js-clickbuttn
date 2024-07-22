
const buttonStyle= `
background-color: red;
 width: 200px;
 height: 50px;
 border-radius: 10px 20px;
 box-shadow: black;
 box-shadow: black 20px 20px 20px;
 margin-bottom: 50px;
 background-color:red;`

function handleClick(element) {
   element.innerHTML = "Clicked"
   if(element.style == buttonStyle){
    element.style = "background-color: pink;"

   }else {
    element.style= buttonStyle
    console.log(element.style)
    
   }
   
 }

 
const ele = document.getElementById("ele1")

function pintar(color){
    
    ele.addEventListener("click", pintar);
    ele.style.backgroundColor = color;
    
    }
    
pintar('green')
    
   
    

   




//let numero = parseInt(prompt("Ingrese un numero"))

//function pinta_fondo(color) {
  //  let elemento = document.querySelector('Body')
  //  elemento.style.backgroundColor = color;
//}

//if(numero == 1){
   // pinta_fondo("red")
//} else if(numero ==2){
    //pinta_fondo("blue")
//} else{
//    pinta_fondo("yellow")
//}


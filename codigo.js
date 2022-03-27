/* function saludar(n,m){
    //alert("Hola"+n);
    alert(`Hola ${n}, el numero es ${m}`);
}

saludar(" Jab",6);
saludar(" Ramon",4);
saludar(" Ervigio",9); */

/* function saludar(n, m) {
  let r = `Hola ${n}, el numero es ${m}`;
  return r;
}

let resultado=saludar(" Jab", 6);
alert(resultado); */


function saludar(n, m) {
  return `Hola ${n}, el numero es ${m}`;
  
}
//para que no carge el resultado automaticamente metemos dentro de funcion
function iniciar(){
    let resultado=saludar(" Jab", 6);
    alert(resultado);
}

//creo evento me da fallo y haago funcion
function todo_preparado(){
    document.getElementById("boton1").onclick = iniciar;
    
    document.getElementById("boton2").onclick = ir_a_una_web;
}

//boton para ir a una pagina web
function ir_a_una_web(){
    location.href="http://www.html6.es";
}

//hasta que no carge html no entra javascript
window.onload = todo_preparado;
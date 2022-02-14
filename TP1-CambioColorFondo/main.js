//const prompt = require('prompt-sync')();
// Terminal > New Terminal > npm install propmt-sync --no-audit

let p_elements = document.getElementsByClassName("_parrafo");
// let p_elements = document.getElementsByTagName("p");

function cambioBGItem1(){
    document.body.style.backgroundColor = "yellow";
    if (p_elements){p_elements.remove()}  
}
function cambioBGItem2(){
    document.body.style.backgroundColor = "green";
    if (p_elements){p_elements.remove()}  
}
function cambioBGItem3(){
    document.body.style.backgroundColor = "red";
    p_elements.remove()  
}
function cambioBGItem4(){   
    alert("Se reiniciara el color de fondo");
    document.body.style.backgroundColor = "white";
    let newParrafo = document.createElement("p");
    newParrafo.className = "_parrafo"
    newParrafo.innerText = "El color de fondo es el preestablecido";
    newParrafo.style.color = "blue"
    newParrafo.style.fontWeight = "bold"
    newParrafo.style.fontSize = "2em"
    newParrafo.style.display = "block"
    newParrafo.style.textAlign = "center"
    document.body.appendChild(newParrafo);    
}
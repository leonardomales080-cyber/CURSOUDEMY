//Son un conjuntos de sentencias que realiza una tarea
function saludar(){
    console.log("Hola Mundo");
}   
saludar(); //Llamar a la función para que se ejecute

    
function sumar(a, b){
    let resultado= a + b; //Retorna el resultado de la suma
    console.log("El resultado de la suma es: " + resultado);
}   
sumar(5, 3); //Llamar a la función con argumentos

function sumar(a, b){
    return a + b; //Retorna el resultado de la suma
    
}   
console.log(sumar(9, 15)); //Llamar a la función con argumentos

var miSuma = function (a,b){
    return a + b
}

console.log(miSuma(4,5))
var a2 = 10
var b2 = 20
console.log(miSuma(a2,b2))
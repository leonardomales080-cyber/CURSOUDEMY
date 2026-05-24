var acceso = true

/*var accesoU = function(a){
    return a
}

accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

var accesoU = a => a //Retorna un valor sin necesidad de escribir return

accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

var accesoU = () => false //no pasamos parametros y retornamos un valor

accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")*/


// 2. Definimos la función flecha (correctamente preparada para recibir un parámetro)
var accesoU = (a) => {
    console.log('Usuario en ejecución');
    return a; // Retorna el valor que le pases (true o false)
};

// 3. Evaluamos con el operador ternario
accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado");

var accesoU = (a,nombre) => {
    console.log(`Usuario ${nombre} en ejecución`)
    return a
}

accesoU(acceso,"Leonardo") == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")
var miObjeto = {
    //clave : valor1
    nombre: "Leonardo"
}
console.log(miObjeto.nombre) //Acceder al valor de la clave nombre


var User = "Leonardo"
var miObjeto = {
    //clave : valor1
    nombre: "Leonardo",
    edad: 37,
    profesion: "Desarrollador",
    texto: `Usuario ${User}`
}
console.log(miObjeto.texto)


var miObjeto = {

    miFuncion: (a, b) => a + b,
}
console.log(miObjeto.miFuncion(5, 3))

var miObjeto = {
    fecha: new Date()
}
console.log(miObjeto.fecha.getFullYear())


var miObjeto = {
    nombre: "Leonardo"
}
var {nombre} = miObjeto //Desestructuración de objetos. Extrae las propiedades nombre del objeto miObjeto y las asigna a variables con el mismo nombre
console.log(nombre)


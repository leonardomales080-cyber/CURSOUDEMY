var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre: "Leonardo Males",
    miAutomovil : [
        pintura = {
            marca: "Ford",
            modelo: "Fiesta",
            año: 2010
        },
        vendedor = {
            nombre: "Leonardo Males",
            tienda: "Autos Usados",
            ayudante : {
                nombre: "Juan Perez",
                nombre1: "Dylan Males"
            }
        }
    ]
}

var miArray = ["Leonardo", 1, 2, 3.56, true, 5, ["Otro array", "Hola", 7900], miFuncion(permitido), persona]

console.log(miArray[0]) // Leonardo
console.log(miArray[3]) // 3.56
console.log(miArray[4]) // true

console.log(miArray[6][1]) // Hola
console.log(miArray[6][1])
console.log(miArray[7]) // Usuario permitido
console.log(miArray[8].nombre) // Leonardo Males

console.log(miArray[8].miAutomovil[0].modelo) // Fiesta
console.log(miArray[8].miAutomovil[1].ayudante.nombre) // Juan Perez
console.log(miArray[8].miAutomovil[1].ayudante.nombre1) // Dylan Males
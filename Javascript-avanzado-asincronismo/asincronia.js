let funcionParam = () => console.log("Soy una función")

let funcion = (callback) => {
    console.log("Hola funcion")
    callback
}

funcion(funcionParam())

console.log(1)
setTimeout(() => console.log("Hola Mundo"),0)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)


setTimeout(() => console.log("Hola Mundo"),1000)

for (let index = 1; index < 999; index++) {
    console.log("Ya termine este bucle")
}
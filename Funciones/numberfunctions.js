var numero = 50
var res = Number.isInteger(numero)

console.log(res)


var numero = 50.5565544
var res = Number.isInteger(numero)
console.log(res)


var numero = 50.545
var res = Number.parseInt(numero)
console.log(res)

var numero = 49.545
var res = Number.parseFloat(numero).toFixed(2)
console.log(res)

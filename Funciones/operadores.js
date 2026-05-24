var a = 2
// +, -, *, /, %, **, ++, --. Operadores aritméticos
a += 3 // = ,+=, -=, *=, /=, %=, **=. Operadores de asignación
console.log(a)

var a = 2 //numero
var a2 = '2' //string
console.log(a ==a2) //true. El operador == compara el valor, no el tipo de dato. El string se convierte a numero
console.log(a === a2) //false. El operador === compara el valor y el tipo de dato. El string no se convierte a numero
console.log(a - a2) //0. Resta, el string se convierte a numero
console.log(a + a2) //22. Suma, el string se concatena al numero
console.log(a * a2) //4. Multiplicación, el string se convierte a numero
console.log(a / a2) //1. División, el string se convierte a numero
console.log(a % a2) //0. Módulo, el string se convierte a numero
console.log(a ** a2) //4. Exponenciación, el string se convierte a numero
console.log(a + Number(a2)) //4. Suma, el string se convierte a numero con la función Number()


//Operadores de comparación
console.log(a != a2) //false. El operador != compara el valor, no el tipo de dato. El string se convierte a numero
console.log(a !== a2) //true. El operador !== compara el valor y el tipo de dato. El string no se convierte a numero    
console.log(a > a2) //false. El operador > compara el valor, no el tipo de dato. El string se convierte a numero
console.log(a < a2) //false. El operador < compara el valor, no el tipo de dato. El string se convierte a numero
console.log(a >= a2) //true. El operador >= compara el valor, no el tipo de dato. El string se convierte a numero
console.log(a <= a2) //true. El operador <= compara el valor, no el tipo de dato. El string se convierte a numero
//Operadores lógicos // &&, ||, !
var b = true
var c = false
console.log(b && c) //false. El operador && devuelve true si ambos operandos son true, de lo contrario devuelve false
console.log(b || c) //true. El operador || devuelve true si al menos uno de los operandos es true, de lo contrario devuelve false
console.log(!b) //false. El operador ! devuelve el valor contrario del operando. Si el operando es true, devuelve false, y viceversa

//Operadores condicionales // ? :
var edad = 37
var res=edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad') //El operador ? : es un operador ternario que evalúa una condición y devuelve un valor si la condición es true, y otro valor si la condición es false. En este caso, si la edad es mayor o igual a 18, se imprime 'Eres mayor de edad', de lo contrario se imprime 'Eres menor de edad'. 
console.log(res) 
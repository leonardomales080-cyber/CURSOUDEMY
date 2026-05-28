// Recibe una expresión y de acuerdo a ella, ejecuta un caso.
var opcion = "Distinto";

switch (opcion) {
    case 1:
        console.log("Menú de usuario");
        break;
    case 2:
        console.log("Menú administrativo");
        break;
    case 3:
        console.log("Configuración");
        break;
    case "Nuevo menu":
        let miNuevoMenu = "Salida";
        console.log(miNuevoMenu);
        break;
    default:
        console.log("Opción no válida");
        break;
}
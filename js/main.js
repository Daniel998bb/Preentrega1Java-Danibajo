alert("Bienvenido a la primera entrega, por favor escriba su nombre")

let nombre = "";
while(nombre === ""){
    nombre = prompt("Ingrese su nombre");
    alert("Hola, " + nombre + ". ¡Bienvenido!");
    if (nombre === ""){
        alert("Un texto vacio no es valido")
    }
}
console.log(nombre);

alert("Bienvenido, estás dentro de la página web, por favor, responde las preguntas")
let edad = prompt("¿Cuantos años tienes?");

while (isNaN(edad) || edad <= 15) {
    alert("Lo sentimos, eres demasaido jóven para visitarnos")
    edad = prompt("Por favor, ingrese una edad válida (mayor que 15):");
}
edad = parseInt(edad);

if( edad > 15 && edad <= 18){
    console.log("Eres un adolescente");
        alert("Eres un adolescente")
}else{
    console.log("Eres un adulto")
        alert("Eres un adulto")

}

function saludarClientePremium() {
    console.log("¡Bienvenido cliente premium!, Disfruta de algunas ventajas de la suscripción premium");
    alert("¡Bienvenido cliente premium!,  Disfruta de algunas ventajas de la suscripción premium.");
     suscripción = prompt("Estimado cliente le recordamos que su suscripción de cliente premium acabará pronto. ¿Desea abonar la cantidad correspondiente ahora o más tarde?");
        console.log("¿Desea abonar la cantidad correspondiente?")
    if (suscripción.toLowerCase() === 'ahora') {
         confirmación = prompt("El precio de la suscripción es de 20 euros. ¿Está seguro de abonar la cantidad ahora? (Responda 'sí' o 'no')");
         console.log("El cliente desea abonar la cantidad")
        if (confirmación.toLowerCase() === 'sí') {
            alert("Se ha abonado la cantidad de 20 euros. ¡Gracias por su pago!");
            console.log("El cliente ha abonado la cantidad de 20 euros")
        } else {
            alert("Entendido, puede abonar la cantidad más tarde.");
        }   
    } else {
        alert("Puede abonar la cantidad más tarde.");
    }
}

function saludarClienteEstandar() {
    console.log("¡Bienvenido cliente estándar!");
    alert("¡Bienvenido cliente estándar!");
}

function saludarClientePlatino() {
    console.log("¡Bienvenido cliente platino!, Disfruta de todas las ventajas de ser platino");
    alert("¡Bienvenido cliente platino!,  Disfruta de todas las ventajas de ser platino.");
}

let tipoDeCliente = prompt("¿Qué tipo de cliente eres, Premium, Estándar o Platino?, Por favor, respete las mayúsculas.");

switch (tipoDeCliente) {
    case "Premium":
        saludarClientePremium();
        break;
    case "Estándar":
        saludarClienteEstandar();
        break;
    case "Platino":
        saludarClientePlatino();
        break;
    default:
        console.log("No eres cliente de nuestra web");
        alert("No eres cliente de nuestra web");
        break;
}

  
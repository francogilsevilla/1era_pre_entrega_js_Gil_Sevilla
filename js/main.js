const interes = 33;

alert("Bienvenido nuestro interes con los prestamos es del 33%");

let monto_a_devolver = 0;
let monto_a_solicitar = 0;

function devuelve(monto) {
    monto_a_devolver = monto + (monto * interes / 100);
    en_cuotas(monto_a_devolver);
    return monto_a_devolver.toFixed(2);
}

function en_cuotas(monto_a_devolver) {
    return "Tambien puede pagarlo en 12 cuotas con un interes del 10%. El monto de cada cuota sera de " + 
    ((monto_a_devolver / 12) * 1.10).toFixed(2);
}

do {
    monto_a_solicitar = prompt("Ingrese el monto a solicitar, esc para terminar");
    const monto_ingresado = parseFloat(monto_a_solicitar);
    if (monto_ingresado > 0) {
        alert("Termina devolviendo " + devuelve(monto_ingresado));
        alert(en_cuotas(monto_a_devolver));
    }
} while (monto_a_solicitar !== "esc");
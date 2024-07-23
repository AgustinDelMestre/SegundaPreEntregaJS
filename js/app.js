let personas = [];
let clientes = [];

function buscarPersona(nombre, apellido) {
    return personas.find(persona => persona.nombre === nombre && persona.apellido === apellido);
}

function agregarPersona(nombre, apellido, edad) {
    personas.push({ nombre, apellido, edad });
}

function agregarCliente(nombre, apellido, edad) {
    clientes.push({ nombre, apellido, edad });
}

function buscarCliente(nombre, apellido) {
    return clientes.find(cliente => cliente.nombre === nombre && cliente.apellido === apellido);
}

function pesosAeuros(pesos, euros) {
    return pesos / euros;
}

function eurosApesos(euros, pesos) {
    return euros * pesos;
}

function pesosAdolares(pesos, dolares) {
    return pesos / dolares;
}

function dolaresApesos(dolares, pesos) {
    return dolares * pesos;
}

function formatearDecimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function convertir() {
    let dolares = 1430.00;
    let euros = 982.9281;

    while (true) {
        let nombre = prompt('Ingrese su nombre:');
        if (/\d/.test(nombre)) {
            alert('El nombre no puede contener números. Por favor, ingrese solo letras.');
            continue;
        }

        let apellido = prompt('Ingrese su apellido:');
        if (/\d/.test(apellido)) {
            alert('El apellido no puede contener números. Por favor, ingrese solo letras.');
            continue;
        }

        let edad = prompt('Ingrese su edad:');
        if (isNaN(edad) || edad === '') {
            alert('La edad debe ser un número. Por favor, ingrese solo números.');
            continue;
        }
        edad = parseInt(edad);

        let cliente = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };

        let persona = buscarPersona(nombre, apellido);
        if (!persona) {
            agregarPersona(nombre, apellido, edad);
        }

        let clienteExistente = buscarCliente(nombre, apellido);
        if (!clienteExistente) {
            agregarCliente(nombre, apellido, edad);
        }

        let opcion = prompt('¿Quieres convertir 1) Pesos a Euros o Dolares o 2) Euros o Dolares a Pesos? \nIngrese 1 o 2 para avanzar.');

        if (opcion === '1') {
            let pesos = parseFloat(prompt('Ingrese la cantidad de pesos a convertir en USD o EUR'));
            if (isNaN(pesos) || pesos <= 0) {
                alert('Por favor ingrese un valor válido');
                continue;
            }

            let eurosConvertidos = pesosAeuros(pesos, euros);
            let dolaresConvertidos = pesosAdolares(pesos, dolares);
            alert(`${nombre} ${apellido}, ${edad} años, el equivalente en euros de $${formatearDecimal(pesos)} pesos es ${formatearDecimal(eurosConvertidos)} EUR`);
            alert(`${nombre} ${apellido}, ${edad} años, el equivalente en dólares de $${formatearDecimal(pesos)} pesos es ${formatearDecimal(dolaresConvertidos)} USD`);
        } else if (opcion === '2') {
            let cantidad = parseFloat(prompt('Ingrese la cantidad de Euros o Dolares a convertir a Pesos'));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert('Por favor ingrese un valor válido');
                continue;
            }

            let pesosDesdeEuros = eurosApesos(cantidad, euros);
            let pesosDesdeDolares = dolaresApesos(cantidad, dolares);

            alert(`El equivalente en pesos desde ${formatearDecimal(cantidad)} EUR es $${formatearDecimal(pesosDesdeEuros)}`);
            alert(`El equivalente en pesos desde ${formatearDecimal(cantidad)} USD es $${formatearDecimal(pesosDesdeDolares)}`);
        } else {
            alert('Opción no válida. Por favor, ingrese 1 o 2 para avanzar.');
            continue;
        }

        let continuar = prompt('¿Desea realizar otra operación? Ingrese 3 para continuar o 4 para salir.');
        if (continuar !== '3') {
            break;
        }
    }

    personas = [];
    clientes = [];
}

convertir();


function Itm(id) {
    return document.getElementById(id);
}

function create(id) {
    return document.createElement(id);
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

function agregarAlHistorial(conversion) {
    var historial = Itm('historial');
    var item = create('button');
    item.className = 'list-group-item list-group-item-action historial-item';
    item.textContent = conversion;
    item.onclick = function () {
        console.log('Cargando conversión:', conversion);
    };
    historial.prepend(item);
}

async function cargarMonedas() {
    try {
        let response = await fetch('/monedas');
        let monedas = await response.json();
        let monedaOrigen = Itm('monedaOrigen');
        let monedaDestino = Itm('monedaDestino');

        for (let codigo in monedas) {
            let option1 = create('option');
            option1.value = codigo;
            option1.text = codigo;
            monedaOrigen.appendChild(option1);

            let option2 = create('option');
            option2.value = codigo;
            option2.text = codigo;
            monedaDestino.appendChild(option2);
        }
    } catch (error) {
        console.error("Error al cargar las monedas: ", error);
    }
}

cargarMonedas();

Itm('conversionForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    let cantidad = Itm('cantidad').value;
    let monedaOrigen = Itm('monedaOrigen').value;
    let monedaDestino = Itm('monedaDestino').value;

    try {
        let response = await fetch(`/convertir?cantidad=${cantidad}&origen=${monedaOrigen}&destino=${monedaDestino}`);
        let resultado = await response.json();

        // Limitar los decimales a 2
        let valorFormateado = Number(resultado.valor).toLocaleString('es-CO', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        Itm('resultado').innerText = `${cantidad} ${monedaOrigen} = ${valorFormateado} ${monedaDestino}`;

        let historial = Itm('historial');
        let item = create('div');
        item.classList.add('historial-item');
        item.innerText = `${cantidad} ${monedaOrigen} -> ${monedaDestino} = ${valorFormateado}`;
        item.addEventListener('click', () => {
            Itm('cantidad').value = cantidad;
            Itm('monedaOrigen').value = monedaOrigen;
            Itm('monedaDestino').value = monedaDestino;
        });
        historial.appendChild(item);

    } catch (error) {
        console.error("Error al convertir: ", error);
    }
});

function limpiarFormulario() {
    const form = Itm('conversionForm');
    form.reset();
}
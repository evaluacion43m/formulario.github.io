// Datos de ejemplo (simulando una base de datos)
let maquillajes = [];
let editingIndex = -1;

function altaMaquillaje() {
    const nombre = document.getElementById('nombre').value;
    const fechaLanzamiento = document.getElementById('fechaLanzamiento').value;
    const marca = document.getElementById('marca').value;
    const tipo = document.getElementById('tipo').value;
    const precio = document.getElementById('precio').value;

    if (!nombre || !fechaLanzamiento || !marca || !tipo || !precio) {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (editingIndex === -1) {
        // Agregar nuevo maquillaje
        maquillajes.push({ nombre, fechaLanzamiento, marca, tipo, precio });
    } else {
        // Editar maquillaje existente
        maquillajes[editingIndex] = { nombre, fechaLanzamiento, marca, tipo, precio };
        editingIndex = -1;
        document.getElementById('submitBtn').innerText = 'Agregar';
    }

    document.getElementById('maquillajeForm').reset();
    actualizarTabla();
}

function actualizarTabla() {
    const table = document.getElementById('maquillajeTable');
    table.innerHTML = '<tr><th>Nombre</th><th>Fecha de Lanzamiento</th><th>Marca</th><th>Tipo</th><th>Precio</th><th>Acciones</th></tr>';

    maquillajes.forEach((maquillaje, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = maquillaje.nombre;
        row.insertCell(1).innerHTML = maquillaje.fechaLanzamiento;
        row.insertCell(2).innerHTML = maquillaje.marca;
        row.insertCell(3).innerHTML = maquillaje.tipo;
        row.insertCell(4).innerHTML = maquillaje.precio;
        row.insertCell(5).innerHTML = `
            <button onclick="editarMaquillaje(${index})">Editar</button>
            <button onclick="eliminarMaquillaje(${index})">Eliminar</button>
        `;
    });
}

function editarMaquillaje(index) {
    const maquillaje = maquillajes[index];
    document.getElementById('nombre').value = maquillaje.nombre;
    document.getElementById('fechaLanzamiento').value = maquillaje.fechaLanzamiento;
    document.getElementById('marca').value = maquillaje.marca;
    document.getElementById('tipo').value = maquillaje.tipo;
    document.getElementById('precio').value = maquillaje.precio;

    editingIndex = index;
    document.getElementById('submitBtn').innerText = 'Guardar Cambios';
}

function eliminarMaquillaje(index) {
    maquillajes.splice(index, 1);
    actualizarTabla();
}

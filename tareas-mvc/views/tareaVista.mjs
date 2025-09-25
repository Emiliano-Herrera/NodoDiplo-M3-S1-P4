export function renderizarListaTareas(tareas) {
    //formatea el array de tareas en formato Json
    return JSON.stringify(tareas, null, 2);
}

// Funcion para renderizar un mensaje generico en format Json;

export function renderizarMensaje (mensaje) {
    return JSON.stringify({mensaje}, null, 2);
}

export function renderizarTarea(tarea) {
    return JSON.stringify(tarea, null, 2);
}


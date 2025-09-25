import TareaRepository from '../repository/tareaRepository.mjs'
import Tarea from '../models/tarea.mjs'

const tareaRepo = new TareaRepository();

export function listarTareas(){
    return tareaRepo.obtenerTodas();
}


export function listarTareasCompletadas() {
    const tareas = tareaRepo.obtenerTodas();
    return tareas.filter(tarea => tarea.completado);
}

export function crearTarea(id, titulo, descripcion, comletado) {
    const tareas = tareaRepo.obtenerTodas();
    const nuevaTarea = new Tarea(id, titulo, descripcion, comletado);

    //validar que tenga tituto
    nuevaTarea.validar();
    // crea una tarea
    tareas.push(nuevaTarea);
    // guarda una tarea
    tareaRepo.guardar(tareas);

}


export function completarTarea(id) {
    const tareas = tareaRepo.obtenerTodas();

    const tarea = tareas.find(tarea => tarea.id === id);
    

    if (tarea){
        tarea.completar();
        //guardar cambios
        tareaRepo.guardar(tareas);
    }
}

export function eliminarTarea(id) {
    let tareas = tareaRepo.obtenerTodas();

    tareas = tareas.filter(tarea => tarea.id !== id);
    tareaRepo.guardar(tareas);
}


/**
 * Modelo de tarea
 * Esté archivo define el modelo tarea, encapsulando tanto los atributos 
 * como los métodos necesario para manipular los datos de una tarea
 * 
*/

export default class Tarea {
    constructor(id, titulo, descripcion, completado = false){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
    }

    completar() {
        this.completado = true; //cambia el estado de comletado a true
    }

    validar(){
        if(!this.titulo || this.titulo.trim() === ''){
            throw new Error('El titulo de la tarea es obligatorio.');
        }
    }
}
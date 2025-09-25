import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import TareasDataSource from './tareasDataSource.mjs';
import Tarea from '../models/tarea.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filePath = path.join(dirname, '../tareas.txt');

export default class TareaRepository extends TareasDataSource {
    constructor(){
        super();
    }


    obtenerTodas(){
        try{
            const data = fs.readFileSync(filePath, 'utf-8');

            const tareas = JSON.parse(data);

            return tareas.map(tareaData => new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ))
        }catch(error){
            console.error("Error al leer el archivo de tareas:", error);
            return [];
        }
    }

    guardar(tareas){
        try{
            const data = JSON.stringify(tareas, null, 2);
            fs.writeFileSync(filePath, data, 'utf-8');
            
        }catch(error){
            console.error("Error al guardar las tareas:", error);
        }
    }

    eliminar(id){
        try{
            const tareas = this.obtenerTodas();

            //filtrar las tareas para eliminar la que tiene el id especificado
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
            console.log(JSON.stringify(tareasActualizadas, null, 2));
            //guardar las tareas actualizadas
            this.guardar(tareasActualizadas);
        }catch(error){
            console.error("Error al eliminar la tarea:", error);
        }
    }
}
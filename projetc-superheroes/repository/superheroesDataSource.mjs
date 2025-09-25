/**
 *  1. Capa de Persistencia
 * Abstracción de la persistencia
 * Este archivo define una abstracción que otras clases de persistencia debe implementar.
 */

export default class SuperheroesDataSource {
    // Método abstracto para obtener todos los superhéroes;
    obtenerTodos(){
        throw new Error('Este método debe ser implementado por la subclase.');
    }
}
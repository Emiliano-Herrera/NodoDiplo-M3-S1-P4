/**
 * El controlador de Superhéroes maneja las solicitudes relacionadas con los superhéroes.
 * Maneja las solicitudes HTTP y utiliza la capa de servicio para obtener los datos necesarios.
 */

import { obtenerSuperheroesPorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";

import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(req, res) {
    const {id} = req.params;
    const superheroe = obtenerSuperheroesPorId(parseInt(id));

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send( {mensaje: 'Superhéroe no encontrado'} );
    }
}

export function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
    
    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send( {mensaje: 'No se encontraron superhéroes que coincidan con los criterios de búsqueda'} );
    }
}

export function obtenerSuperHeroesMayoresDe30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

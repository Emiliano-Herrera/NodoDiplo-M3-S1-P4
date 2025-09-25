/**
 * Servidor express
 * 
 * el servidor express se configura para ecuchar en el puerto 3005
 * y manejar las solicitudes a las diversas rutas.
*/

import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperHeroesMayoresDe30Controller } from './controllers/superheroesController.mjs';
const app = express();
const PORT = 3005;

// RUTAS
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/valor/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/mayoresDe30', obtenerSuperHeroesMayoresDe30Controller);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
import express from 'express';

//importar controladores listarTareasCompletadasController
import { listarTareasCompletadasController, listarTareasController, crearTareaController, completarTareaController, eliminarTareaController } from './controllers/tareaController.mjs';

const app = express();
const PORT = 3000;

//middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

app.get('/tareas', listarTareasController);

app.get('/tareas/completadas', listarTareasCompletadasController);

app.post('/tareas', crearTareaController);

app.put('/tareas/:id/completar', completarTareaController);

app.delete('/tareas/:id', eliminarTareaController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
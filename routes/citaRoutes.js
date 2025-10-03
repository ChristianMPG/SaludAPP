import express from 'express';
import {
obtenerTodasLasCitas,
obtenerCitaPorId,
crearCita,
actualizarCita,
eliminarCita
} from '../controllers/citaController.js';

const router = express.Router();

router.get('/', obtenerTodasLasCitas);
router.get('/:id', obtenerCitaPorId);
router.post('/', crearCita);
router.put('/:id', actualizarCita);
router.delete('/:id', eliminarCita);

export default router;
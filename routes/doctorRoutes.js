import express from 'express';
import {
obtenerTodosLosDoctores,
obtenerDoctorPorId,
crearDoctor,
actualizarDoctor,
eliminarDoctor
} from '../controllers/doctorController.js';
const router = express.Router();
router.get('/', obtenerTodosLosDoctores);
router.get('/:id', obtenerDoctorPorId);
router.post('/', crearDoctor);
router.put('/:id', actualizarDoctor);
router.delete('/:id', eliminarDoctor);
export default router;
import express from 'express';
import {
obtenerTodosLosUsuarios,
obtenerUsuarioPorId,
crearUsuario,
actualizarUsuario,
eliminarUsuario
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', obtenerTodosLosUsuarios);
router.get('/:id', obtenerUsuarioPorId);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
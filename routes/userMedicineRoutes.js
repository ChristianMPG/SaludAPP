import express from 'express';
import {
obtenerTodasLasRelacionesUsuarioMedicina,
obtenerRelacionUsuarioMedicinaPorId
} from '../controllers/userMedicineController.js';

const router = express.Router();

router.get('/', obtenerTodasLasRelacionesUsuarioMedicina);
router.get('/:id', obtenerRelacionUsuarioMedicinaPorId);

export default router;

import express from 'express';
import {
obtenerTodasLasMedicinas,
obtenerMedicinaPorId,
crearMedicina,
actualizarMedicina,
eliminarMedicina
} from '../controllers/medicineController.js';

const router = express.Router();

router.get('/', obtenerTodasLasMedicinas);
router.get('/:id', obtenerMedicinaPorId);
router.post('/', crearMedicina);
router.put('/:id', actualizarMedicina);
router.delete('/:id', eliminarMedicina);

export default router;
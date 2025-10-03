import medicine from '../models/medicine.js';

// Obtener todas las medicinas (GET ALL)
export const obtenerTodasLasMedicinas = async (req, res) => {
    try {
        const medicinas = await medicine.find();
        res.json(medicinas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de medicinas' });
    }
};

// Obtener una sola medicina por ID (GET ONE)
export const obtenerMedicinaPorId = async (req, res) => {
    try {
        const medicina = await medicine.findById(req.params.id);
        if (!medicina) {
            return res.status(404).json({ mensaje: 'No se encontró esta medicina' });
        }
        res.json(medicina);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información de la medicina' });
    }
};

// Crear una nueva medicina (POST)
export const crearMedicina = async (req, res) => {
    const nuevaMedicina = new medicine(req.body);
    try {
        const medicinaGuardada = await nuevaMedicina.save();
        res.status(201).json(medicinaGuardada);
    } catch (error) {
        console.error(error); // Para debugging
        res.status(500).json({ mensaje: 'Hubo un error al agregar la medicina' });
    }
};

// Actualizar una medicina existente (PUT)
export const actualizarMedicina = async (req, res) => {
    try {
        const medicina = await medicine.findById(req.params.id);
        if (!medicina) {
            return res.status(404).json({ mensaje: 'Error al actualizar medicina' });
        }
        const medicinaActualizada = await medicine.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(medicinaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al actualizar la medicina' });
    }
};

// Eliminar una medicina (DELETE)
export const eliminarMedicina = async (req, res) => {
    try {
        const medicina = await medicine.findById(req.params.id);
        if (!medicina) {
            return res.status(404).json({ mensaje: 'Medicina no encontrada' });
        }
        await medicine.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Medicina eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al eliminar la medicina' });
    }
};
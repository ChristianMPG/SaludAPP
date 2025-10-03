import userMedicine from '../models/user_medicine.js';

// Obtener todas las relaciones usuario-medicina (GET ALL)
export const obtenerTodasLasRelacionesUsuarioMedicina = async (req, res) => {
    try {
        const relaciones = await userMedicine.find();
        res.json(relaciones);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de relaciones usuario-medicina' });
    }
};

// Obtener una sola relación usuario-medicina por ID (GET ONE)
export const obtenerRelacionUsuarioMedicinaPorId = async (req, res) => {
    try {
        const relacion = await userMedicine.findById(req.params.id);
        if (!relacion) {
            return res.status(404).json({ mensaje: 'No se encontró esta relación usuario-medicina' });
        }
        res.json(relacion);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información de la relación usuario-medicina' });
    }
};

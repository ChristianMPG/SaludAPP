import cita from '../models/cita.js';

// Obtener todas las citas (GET)
export const obtenerTodasLasCitas = async (req, res) => {
    try {
        const citas = await cita.find();
        res.json(citas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de citas' });
    }
};

// Obtener una sola cita por ID (GET)
export const obtenerCitaPorId = async (req, res) => {
    try {
        const cita = await cita.findById(req.params.id);
        if (!cita) {
            return res.status(404).json({ mensaje: 'No se encontró esta cita' });
        }
        res.json(cita);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información de la cita' });
    }
};

// Crear una nueva cita (POST)
export const crearCita = async (req, res) => {
    const nuevaCita = new cita(req.body);
    try {
        const citaGuardada = await nuevaCita.save();
        res.status(201).json(citaGuardada);
    } catch (error) {
        console.error(error); // Para debugging
        res.status(500).json({ mensaje: 'Hubo un error al agregar la cita' });
    }
};

// Actualizar una cita existente (PUT)
export const actualizarCita = async (req, res) => {
    try {
        const cita = await cita.findById(req.params.id);
        if (!cita) {
            return res.status(404).json({ mensaje: 'Error al actualizar cita' });
        }
        const citaActualizada = await cita.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(citaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al actualizar la cita' });
    }
};

// Eliminar una cita (DELETE)
export const eliminarCita = async (req, res) => {
    try {
        const cita = await cita.findById(req.params.id);
        if (!cita) {
            return res.status(404).json({ mensaje: 'Cita no encontrada' });
        }
        await cita.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Cita eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al eliminar la cita' });
    }
};
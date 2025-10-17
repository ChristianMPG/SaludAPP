import Cita from '../models/cita.js';

// Obtener todas las citas (GET)
export const obtenerTodasLasCitas = async (req, res) => {
  try {
    const citas = await Cita.find();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de citas' });
  }
};

// Obtener una sola cita por ID (GET)
export const obtenerCitaPorId = async (req, res) => {
  try {
    const citaEncontrada = await Cita.findById(req.params.id);
    if (!citaEncontrada) {
      return res.status(404).json({ mensaje: 'No se encontró esta cita' });
    }
    res.json(citaEncontrada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener la información de la cita' });
  }
};

// Crear una nueva cita (POST)
export const crearCita = async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    const citaGuardada = await nuevaCita.save();
    res.status(201).json(citaGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al agregar la cita' });
  }
};

// Actualizar una cita existente (PUT)
export const actualizarCita = async (req, res) => {
  try {
    const citaActualizada = await Cita.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!citaActualizada) {
      return res.status(404).json({ mensaje: 'No se encontró la cita para actualizar' });
    }
    res.json(citaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar la cita' });
  }
};

// Eliminar una cita (DELETE)
export const eliminarCita = async (req, res) => {
  try {
    const citaEliminada = await Cita.findByIdAndDelete(req.params.id);
    if (!citaEliminada) {
      return res.status(404).json({ mensaje: 'Cita no encontrada' });
    }
    res.json({ mensaje: 'Cita eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar la cita' });
  }
};

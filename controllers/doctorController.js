import Doctor from '../models/doctor.js';
// Obtener todos los doctores (GET)
export const obtenerTodosLosDoctores = async (req, res) => {
    try {
        const doctores = await Doctor.find();
        res.json(doctores);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de doctores: ' + error });
    }
};
// Obtener un solo doctor por ID (GET)
export const obtenerDoctorPorId = async (req, res) => {
    try {
        const doctorid = await Doctor.findById(req.params.id);
        if (!doctorid) {
            return res.status(404).json({ mensaje: 'No se encontró a este doctor' });
        }
        res.json(doctorid);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información del doctor' });
    }
};
// Crear un nuevo doctor (POST)
export const crearDoctor = async (req, res) => {
    const nuevoDoctor = new Doctor(req.body);
    try {
        const doctorGuardado = await nuevoDoctor.save();
        res.status(201).json(doctorGuardado);
    } catch (error) {
        console.error(error); // Para debugging
        res.status(500).json({ mensaje: 'Hubo un error al agregar el perfil del doctor' });
    }
};
// Actualizar un doctor existente (PUT)
export const actualizarDoctor = async (req, res) => {
    try {
        const doctorExistente = await Doctor.findById(req.params.id);
        if (!doctorExistente) {
            return res.status(404).json({ mensaje: 'Error al actualizar perfil' });
        }
        const doctorActualizado = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(doctorActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el perfil' });
    }
};
// Eliminar un doctor (DELETE)
export const eliminarDoctor = async (req, res) => {
    try {
        const doctorExistente = await Doctor.findById(req.params.id);
        if (!doctorExistente) {
            return res.status(404).json({ mensaje: 'Perfil no encontrado' });
        }
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Perfil del doctor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el doctor' });
    }
};
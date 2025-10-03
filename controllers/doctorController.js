import doctor from '../models/doctor.js';
// Obtener todos los productos (GET)
export const obtenerTodosLosDoctores = async (req, res) => {
    try {
        const doctor = await Product.find();
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de doctores' });
    }
};
// Obtener un solo producto por ID (GET)
export const obtenerDoctorPorId = async (req, res) => {
    try {
        const doctor = await doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ mensaje: 'No se encontró a este doctor' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información del doctor' });
    }
};
// Crear un nuevo producto (POST)
export const crearDoctor = async (req, res) => {
    const nuevoDoctor = new doctor(req.body);
    try {
        const doctorGuardado = await nuevoDoctor.save();
        res.status(201).json(doctorGuardado);
    } catch (error) {
        console.error(error); // Para debugging
        res.status(500).json({ mensaje: 'Hubo un error al agregar el perfil del doctor' });
    }
};
// Actualizar un producto existente (PUT)
export const actualizarDoctor = async (req, res) => {
    try {
        const doctor = await doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ mensaje: 'Error al actualizar perfil' });
        }
        const doctorActualizado = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(doctorActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el perfil' });
    }
};
// Eliminar un producto (DELETE)
export const eliminarDoctor = async (req, res) => {
    try {
        const doctor = await Product.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ mensaje: 'Perfil no encontrado' });
        }
        await Product.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Perfil del doctor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el producto' });
    }
};
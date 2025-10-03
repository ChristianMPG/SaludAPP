import user from '../models/user.js';

// Obtener todos los usuarios (GET)
export const obtenerTodosLosUsuarios = async (req, res) => {
    try {
        const usuarios = await user.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de usuarios' });
    }
};

// Obtener un solo usuario por ID (GET)
export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await user.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'No se encontró este usuario' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener la información del usuario' });
    }
};

// Crear un nuevo usuario (POST)
export const crearUsuario = async (req, res) => {
    const nuevoUsuario = new user(req.body);
    try {
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        console.error(error); // Para debugging
        res.status(500).json({ mensaje: 'Hubo un error al agregar el usuario' });
    }
};

// Actualizar un usuario existente (PUT)
export const actualizarUsuario = async (req, res) => {
    try {
        const usuario = await user.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Error al actualizar usuario' });
        }
        const usuarioActualizado = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el usuario' });
    }
};

// Eliminar un usuario (DELETE)
export const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await user.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        await user.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el usuario' });
    }
};
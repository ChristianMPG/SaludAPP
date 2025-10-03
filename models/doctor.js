import mongoose from 'mongoose';
const doctorSchema = mongoose.Schema({
contraseña: {
type: String,
required: true,
trim: true
},
nombre1: {
type: String,
required: true, 
trim: true
},
nombre2: {
type: String,
required: true, 
trim: true
},
apellido1: {
type: String,
required: true, 
trim: true
},
apellido2: {
type: String,
required: true, 
trim: true
},
correo: {
type: String,
required: true, 
trim: true,
},
telefono: {
type: Number,
required: true, 
trim: true
},
doctor: {
type: Boolean,
required: true, 
trim: true
},
especialidad: {
    type: String,
    required: true, 
    trim: true
    }
}, {
timestamps: true
});
const doctor= mongoose.model('doctor', doctorSchema);
export default doctor;
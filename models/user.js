import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
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
unique: true,
trim: true,
},
telefono: {
type: Number,
required: true, 
trim: true
},
direccion: {
type: String,
required: true, 
trim: true
}
}, {
timestamps: true
});
const Product = mongoose.model('user', userSchema);
export default Product;
import mongoose from 'mongoose';

const citaSchema = mongoose.Schema({
id_usuario: {
type: mongoose.Schema.Types.ObjectId,
ref: 'user',
required: true,
trim: true
},
id_doctor: {
type: mongoose.Schema.Types.ObjectId,
ref: 'doctor',
required: true,
trim: true
},
hora: {
type: String,
required: true,
trim: true
},
fecha: {
type: Date,
required: true,
trim: true
}
}, {
timestamps: true
});

const Product = mongoose.model('cita', citaSchema);
export default Product;
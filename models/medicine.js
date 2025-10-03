import mongoose from 'mongoose';
const MedicineSchema = mongoose.Schema({
nombre_medicamento: {
type: String,
required: true,
trim: true
},
descripcion: {
type: String,
required: true, 
trim: true
},
formula: {
type: String,
required: true, 
trim: true
},

}, {
timestamps: true
});
const Product = mongoose.model('medicine', MedicineSchema);
export default Product; 
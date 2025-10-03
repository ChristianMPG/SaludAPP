import mongoose from 'mongoose';
const userMedicineSchema = mongoose.Schema({
user_id: {
type: mongoose.Schema.Types.ObjectId,
ref: 'user',
required: true,
trim: true
},
medicine_id: {
type: mongoose.Schema.Types.ObjectId,
ref: 'medicine',
required: true,
trim: true
},
}, {
timestamps: true
});
const Product = mongoose.model('usermedicine', userMedicineSchema);
export default Product;

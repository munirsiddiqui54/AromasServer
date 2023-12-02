import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.ObjectId,
        ref: 'products'
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'users'
    },
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('cart', cartSchema);
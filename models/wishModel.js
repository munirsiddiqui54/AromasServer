import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
    product: {
        type: mongoose.ObjectId,
        ref: 'products'
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'users'
    }
}, { timestamps: true })

export default mongoose.model('wishlist', wishSchema);
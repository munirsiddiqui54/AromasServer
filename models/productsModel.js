import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    features: {
        type: String,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model('products', productSchema);
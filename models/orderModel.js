import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
    pid: {
        type: mongoose.ObjectId,
        ref: 'products'
    },
    qty: Number
});


const orderSchema = new mongoose.Schema({
    cart: [subSchema],
    buyer: {
        type: mongoose.ObjectId,
        ref: 'users'
    },
    payment: {},
    status: {
        type: 'String',
        default: 'Processed',
        enum: ['Processing', 'Processed', 'Shipped', 'Delivered', 'Cancelled']
    }
}, { timestamps: true })

export default mongoose.model('order', orderSchema);
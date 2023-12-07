import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.model('users', userSchema);
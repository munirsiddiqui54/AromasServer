import mongoose from "mongoose";

const msg = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    msg: {
        type: String,
    },

}, { timestamps: true })

export default mongoose.model('msg', msg);
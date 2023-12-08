import mongoose from "mongoose";

const subs = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

export default mongoose.model('subscriber', subs);
import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(con.connection.host.bgMagenta.white);
    } catch (error) {
        console.log(`ERROR Connecting to DB`.bgRed.white)
    }
}

export default connectDB;
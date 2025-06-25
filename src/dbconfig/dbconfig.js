import mongoose from "mongoose";

export async function connectdb() {
    try{
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on()
    }
}
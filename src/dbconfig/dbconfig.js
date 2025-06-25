import mongoose from "mongoose";

export async function connectdb() {
    const uri = process.env.MONGO_URL;
    console.log(uri)
    try{
        await mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('Connected');
            return ('connected');
        })
        connection.on('error',()=>{
            console.log('MongoDB Connection Error')
        })
    }
    catch(error){
        console.log("Something Went Wrong While Connecting To DB");
        return('not connected')
    }
}
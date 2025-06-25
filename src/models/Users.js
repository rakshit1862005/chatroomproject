import mongoose, { mongo } from "mongoose";

const  userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Please Provide An Email"]
        },
        email:{
            type:String,
            required:[true,"Please Enter Email"]
        },
        password:{
            type:String,
            required:[true,"Enter A Password"]
        }
    }
) 

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;
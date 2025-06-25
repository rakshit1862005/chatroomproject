import { connectdb } from "@/dbconfig/dbconfig";
import User from "@/models/Users";

export async function POST(req) {
    await connectdb();

    console.log("Request Recieved");
    const body = await req.json();
    const{username,password}= body;

    const user = await User.findOne({ username: username.trim().toLowerCase() });
    
    if(!user){
        return new Response(JSON.stringify({message:'UserName Not Registered',
            username:user.username
        }))
    }
    let match = 0;
    if(password ==  user.password){
        match=1;
    }
    if(match==1){
        return new Response(JSON.stringify({message:'Logged-IN'}))
    }
    else{
        return new Response(JSON.stringify({message:'Incorrect Password'}))
    }
        

}
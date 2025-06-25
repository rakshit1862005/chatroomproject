'use client';

import axios from 'axios';
import { User } from 'lucide-react';
import Sidebar from '../component/sidebar';
import { useEffect, useState } from 'react';

export default function Login() {
    const [userid,setuserid] = useState(null);
    useEffect(()=>{
        const temp = localStorage.getItem('userid');
        if(temp){
            setuserid(temp);
        }
    },[userid])
    async function handlesubmit() {
        event.preventDefault();
        const usern = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;

        let response = await axios.post('/api/users/login',{
            username:usern,
            password:pass
        });

        const data = response.data;

        if(data.message=="Logged-IN"){
            console.log("Loggned IN");
            localStorage.setItem('userid',usern);
            setuserid(localStorage.getItem('userid'));
        }
        else{
            console.log("Error Incorrect Credentials");
            console.log(data);
        }
}
function logout(){
    localStorage.removeItem('userid');
    setuserid(null);
}

    return (
        <>
        <Sidebar></Sidebar>
        {!userid?(
        <div className="flex flex-col items-center justify-center h-screen">
            
            <form onSubmit={handlesubmit} className="flex flex-col min-w-1/4 min-h-2/4 rounded-xl items-center justify-center align-center gap-4" >
                <div className="flex flex-row font-bold text-[30px]">
                    <User size={40} />
                    <span className='align-center'>Login</span>
                </div>
                <div></div>
                <label className="font-bold text-[20px]">
                    Username
                </label>
                <input type='text' className="border-b-4 border-[#252424] min-h-[35px] " placeholder="Username" id='user'/>
                <label className="font-bold text-[20px]">
                    Password
                </label>
                <input type='password' className="border-b-4 border-[#252424] min-h-[35px]" placeholder="Password" id='pass'/>
                <div></div>
                <button className='min-w-50 text-[25px] font-bold rounded-2xl border-[#252424] border-2 '>Login</button>
            </form>
        </div>):(
            <div className='mainarea'>
                <div className='wcom'>Welcome {userid}! <button onClick={logout} id='logout'>Log Out</button> </div>
                    
            </div>
        )}
        </>
    )
}
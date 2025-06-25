'use client';

import { User } from 'lucide-react';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="flex flex-col min-w-1/4 min-h-2/4 rounded-xl items-center justify-center align-center gap-4">
                <div className="flex flex-row font-bold text-[30px]">
                    <User size={40} />
                    <span className='align-center'>Login</span>
                </div>
                <div></div>
                <label className="font-bold text-[20px]">
                    Username
                </label>
                <input type='text' className="border-b-4 border-[#252424] min-h-[35px] " placeholder="Username"/>
                <label className="font-bold text-[20px]">
                    Password
                </label>
                <input type='password' className="border-b-4 border-[#252424] min-h-[35px]" placeholder="Password"/>
                <div></div>
                <button className='min-w-50 text-[25px] font-bold rounded-2xl border-[#252424] border-2 '>Login</button>
            </form>
        </div>
    )
}
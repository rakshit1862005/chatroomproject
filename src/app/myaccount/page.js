'use client';

import axios from 'axios';
import { User, Eye, EyeOff } from 'lucide-react';
import Sidebar from '../component/sidebar';
import { useEffect, useState } from 'react';

export default function Login() {

  const [userid, setuserid] = useState(null);
  const [signup, setsignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem('userid');
    if (temp) {
      setuserid(temp);
    }
  }, [userid]);

  async function handlesubmit(event) {
    event.preventDefault();
    const usern = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    let response = await axios.post('/api/users/login', {
      username: usern,
      password: pass,
    });

    const data = response.data;

    if (data.message === 'Logged-IN') {
      console.log('Logged IN');
      localStorage.setItem('userid', usern);
      setuserid(usern);
    } else {
      console.log('Error Incorrect Credentials');
      console.log(data);
    }
  }

  function logout() {
    localStorage.removeItem('userid');
    setuserid(null);
  }

  const handlesignup = () => {
    setsignup(true);
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-1 items-center justify-center bg-black text-white px-10">
        {!userid ? (
          signup ? (
            <form
              onSubmit={handlesubmit}
              className="flex flex-col w-full max-w-md rounded-xl items-center justify-center gap-6"
            >
              <div className="flex flex-row font-bold text-[30px] mb-4">
                <User size={40} />
                <span className="inline-block text-center min-w-[130px]">SignUp</span>
              </div>

              <input
                type="text"
                className="border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white w-full placeholder-gray-400"
                placeholder="Username"
                id="user"
              />

              <input
                type="text"
                className="border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white w-full placeholder-gray-400"
                placeholder="Email"
                id="email"
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white pr-10 placeholder-gray-400"
                  placeholder="Password"
                  id="pass"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <input
                type="password"
                className="border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white w-full placeholder-gray-400"
                placeholder="Confirm Password"
                id="confirmPass"
              />

              <button
                type="submit"
                className="min-w-40 text-[20px] font-bold rounded-2xl border-[#252424] border-2 mt-4"
              >
                SignUp
              </button>
            </form>
          ) : (
            <form
              onSubmit={handlesubmit}
              className="flex flex-col w-full max-w-md rounded-xl items-center justify-center gap-6"
            >
              <div className="flex flex-row font-bold text-[30px] mb-4">
                <User size={40} />
                <span className="inline-block text-center min-w-[100px] id=lgin">Login</span>
              </div>

              <input
                type="text"
                className="border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white w-75 placeholder-gray-400"
                placeholder="Username"
                id="user"
              />

              <div className="relative w-75">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border-b-2 border-[#252424] bg-transparent min-h-[35px] focus:outline-none focus:border-white pr-10 placeholder-gray-400"
                  placeholder="Password"
                  id="pass"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="min-w-40 text-[20px] font-bold rounded-2xl border-[#252424] border-2 mt-4"
              >
                Login
              </button>

              <div className="flex flex-row gap-2 text-sm mt-2">
                <span>Not Registered?</span>
                <button
                  type="button"
                  onClick={handlesignup}
                  className="hover:text-zinc-400 underline"
                >
                  Signup
                </button>
              </div>
            </form>
          )
        ) : (
          <div className="mainarea">
            <div className="wcom">
              Welcome {userid}! <button onClick={logout} id='logout'>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
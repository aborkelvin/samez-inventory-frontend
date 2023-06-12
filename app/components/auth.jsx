
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Auth() {


  const router = useRouter()
  const [userinfo, setuserinfo] = useState({
    username:'',
    password:''  
  })

  const handleformchange = (event) =>{
    setuserinfo((prevUserInfo) => ({...prevUserInfo, [event.target.name]:event.target.value }) )
  }

  function handlesubmit(event) {
    event.preventDefault();
  
    const { username, password } = userinfo;
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all required fields');
    } else {
      username === 'kcbd@pdf' && password === 'kcbd'
        ? router.push('/pages/inventory')
        : alert('Incorrect username or password');
    }
    
    console.log(username);
    console.log(password);
  }
  

  return (
    <div className='flex items-center gap-10 w-full h-screen ' >
      <div className=" flex-1 flex justify-end relative bottom-10 ">
        {/* <Image src="/images/logo.png" alt="Logo" width={300} height={400} /> */}
        <h1 className='text-3xl font-bold max-w-[700px] text-center leading-10 ' >
          Welcome to Samez Paint's Inventory Management System. Streamlining stock keeping the perfect way
        </h1>
      </div>
      
      <div className="flex flex-1 w-full items-center justify-start pl-5">
        <div className="bg-gray-100 p-8 rounded shadow-md w-[70%] xl:w-[50%] min-w-[350px] ">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="username">Username</label>
              <input className="w-full outline-none px-3 py-2 border rounded" type="text" id="username" name="username" 
              placeholder="Enter your username" autoComplete='off' required onChange={handleformchange} />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="password">Password</label>
              <input className="w-full outline-none px-3 py-2 border rounded" type="password" id="password" name="password" 
              placeholder="Enter your password" autoComplete='off' required onChange={handleformchange} />
            </div>
            <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 mb-4" 
              type="submit" onClick={handlesubmit} >              
                Sign In
            </button>
            <button className="w-full flex gap-3 justify-center items-center py-2 px-4 bg-[#4285F4] text-white font-bold rounded hover:bg-blue-700" type="button">
              <Image src="/images/googleicon.svg" alt='google icon' width={30} height={30} />
              <span>Sign In with Google</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

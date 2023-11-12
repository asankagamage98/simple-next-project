
"use client"

import React from 'react'
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const registerbtn = ()=>{
    router.push("/register");
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mx-auto max-w-xs">
           <form>
                <div className='w-full font-bold text-2xl text-center'><p className=''>SIGN IN</p></div>
                <div className="mt-3 form-control w-full mb-2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input  name="usename" type="text" placeholder="Input user name" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input name="password" type="password" placeholder="Input password" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
                </div>
                <div className='w-full mt-5 '>
                      <button type="submit" className="btn btn-accent w-full">Login</button>
                </div>
            </form>
            <div className="w-full text-center mt-5"><button onClick={registerbtn}  className="btn btn-outline w-full">Register</button></div>
           
        </div>
    </main>
  )
}

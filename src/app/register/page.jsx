"use client"

import React from 'react'
import { useRouter } from "next/navigation";

function page() {

const router = useRouter();

const login =() => {
    router.push("/")
}
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
    <div className='mx-auto max-w-xs'>
     <form action="">
        <div className='w-full font-bold text-2xl text-center'><p className=''>SIGN UP</p></div>
        <div className="mt-3 form-control w-full mb-2">
            <label className="label">
            <span className="label-text">Name</span>
            </label>
            <input  name="name" type="text" placeholder="Input user name" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="mt-3 form-control w-full mb-2">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input  name="email" type="email" placeholder="Input user email" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="form-control w-full">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="Input password" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="form-control w-full">
            <label className="label">
            <span className="label-text">Conform Password</span>
            </label>
            <input name="password_confirmation" type="password" placeholder="enter conform passowrd" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className='w-full mt-5 '>
                <button type="submit" className="btn btn-accent w-full">Register</button>
        </div>
      </form>
      <div className='w-full text-center mt-5'>
        <button onClick={login}  className="btn btn-outline w-full">Login</button>
     </div>
    </div>
  </div>
  )
}

export default page
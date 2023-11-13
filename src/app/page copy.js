
"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/Auth/loginSlice';

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const registerbtn = ()=>{
    router.push("/register");
}

const [login,setLoginForm] = useState({

      username:'',
      password:""
});

const handleLogin =(e) =>{
     e.preventDefault();
     setLoginForm({...login,[e.target.name]: e.target.value});
     console.log(setLoginForm);
}
const submit = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();

    // Append form data fields
    formData.append('email', login.username);
    formData.append('password', login.password);

    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        // Omit 'Content-Type' to let the browser set it automatically for FormData
      },
      body: formData,
    });

    console.log('Response Status:', response.status);

    if (response.ok) {
      const data = await response.json();
      alert('Success!');
      // console.log(data);
      dispatch(setUser(data.user)); 

      // dispatch(setUser(data)); //set data for redux
      router.push("/home");

    } else {
      throw new Error('Network response was not ok');
    }

  } catch (error) {
    alert('Error!');
    console.error('Error:', error);
  }
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mx-auto max-w-xs">
           <form action="" onSubmit={submit}>
                <div className='w-full font-bold text-2xl text-center'><p className=''>SIGN IN</p></div>
                <div className="mt-3 form-control w-full mb-2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input onChange={handleLogin}  name="username" type="email" placeholder="Input user name (email)" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input onChange={handleLogin} name="password" type="password" placeholder="Input password" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
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

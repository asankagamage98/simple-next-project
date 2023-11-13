"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

function page() {

const router = useRouter();

const login =() => {
    router.push("/")
}
// ----------------------------------
const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleFormChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  
 const submit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Append form data fields
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('password_confirmation', form.password_confirmation);

    const response = await fetch('http://127.0.0.1:8000/api/register', {
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
      console.log(data);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    alert('Error!');
    console.error('Error:', error);
  }
};

// ----------------------------both code are working --------------------------

// const submit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });
  
//       console.log('Response Status:', response.status);
  
//       if (response.ok) {
//         const data = await response.json();
//         alert('Success!');
//         console.log(data);
//       } else {
//         throw new Error('Network response was not ok');
//       }
//     } catch (error) {
//       alert('Error!');
//       console.error('Error:', error);
//     }
//   };
  


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
    <div className='mx-auto max-w-xs'>
     <form action="" onSubmit={submit}>
        <div className='w-full font-bold text-2xl text-center'><p className=''>SIGN UP</p></div>
        <div className="mt-3 form-control w-full mb-2">
            <label className="label">
            <span className="label-text">Name</span>
            </label>
            <input onChange={handleFormChanges}  name="name" type="text" placeholder="Input user name" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="mt-3 form-control w-full mb-2">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input onChange={handleFormChanges}  name="email" type="email" placeholder="Input user email" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="form-control w-full">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input onChange={handleFormChanges} name="password" type="password" placeholder="Input password" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className="form-control w-full">
            <label className="label">
            <span className="label-text">Conform Password</span>
            </label>
            <input onChange={handleFormChanges} name="password_confirmation" type="password" placeholder="enter conform passowrd" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
        </div>
        <div className='w-full mt-5 '>
                <button  type="submit" className="btn btn-accent w-full">Register</button>
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
"use client"

import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

function page() {

const user = useSelector((state) => state.login.user);
const router = useRouter();

useEffect(() => {
    // Log user details to the console
    console.log('User Details:', user);
  }, [user]); 

  if (!user) {
         
    router.push('/');
    return null;
}


 return (
     
    <div>
      
           <p className='text-6xl'>Welcome to Home page</p>
        
    </div>
    
  )
}

export default page
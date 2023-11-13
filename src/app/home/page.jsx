"use client"
import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import NavbarMain from '@/components/navbar/NavbarMain';

function page() {
    const user = useSelector((state) => state.login.user);
    const router = useRouter();
    
    useEffect(() => {
        // Log user details to the console
        console.log('User Details:', user);
    
        // Redirect to the home page when the component is mounted
        if (!user) {
          router.push('/');
        }
       
      }, [user, router]); 
    

 return (
     
    <div className='bg-white flex min-h-screen flex-col '>
    
      <NavbarMain/>   
    </div>
    
  )
}

export default page
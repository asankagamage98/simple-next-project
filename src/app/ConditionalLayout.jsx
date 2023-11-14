import React from 'react'
import { usePathname } from "next/navigation";
import NavbarMain from '@/components/navbar/NavbarMain';

function ConditionalLayout({children}) {

  const pathname = usePathname();

  return (
   <>
      {pathname == "/" || pathname == "/register" ? (
        <div>{children}</div>
      ) : (
        <div className="flex max-w-screen w-full flex-col ">
          <div className='flex flex-col '>
            <NavbarMain/>
          </div>
          <div className="bg-slate-50 w-full flex min-h-screen flex-col">
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default ConditionalLayout
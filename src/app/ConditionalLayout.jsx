import React,{useState} from 'react'
import { usePathname} from "next/navigation";
import NavbarMain from '@/components/navbar/NavbarMain';
import SideNavBar from '@/components/navbar/SideNavBar';


function ConditionalLayout({children}) {

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };



  const pathname = usePathname();

  return (
   <>
      {pathname == "/" || pathname == "/register" ? (
        <div>{children}</div>
      ) : (
        <div className=" flex max-w-screen w-full flex-col ">
          <div className='flex flex-col '>
            <NavbarMain/>
          </div>
          <div className='bg-white flex max-w-screen justify-between w-full'>
              <div className="bg-slate-50 flex max-w-screen justify-between">
                        <div 
                          className="p-1 w-right-pane min-h-screen "
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                        >
                          {isMouseOver && <SideNavBar />}
                        </div>
               </div>
              <div className="bg-white w-full">
                {children}
              </div>
          </div>
         
        </div>
      )}
    </>
  )
}

export default ConditionalLayout
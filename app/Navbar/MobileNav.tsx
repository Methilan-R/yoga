 import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}
const MobileNav = ({closeNav,showNav}:Props) => {
    const navOpen = showNav ? "translate-x-0":"translate-x-[-100%]"
  return (
    <div >
       {/*overlay*/}
       <div className={`fixed ${navOpen} insert-0 transform transition-all duration-500 z-{1002} bg-black opacity-70 w-full h-screen`}></div>
        {/* navlink */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500
        delay-300 w-[80%] sm:w-[60%] bg-cyan-300 space-y-6 z-[1050]`}>
            {navLinks.map((link)=>{
                return(
                    <Link key={link.id} href={link.url}>
                        <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                            {link.label}
                        </p>
                    </Link>
                )
            })}
            {/*close button */}
        <CgClose
        onClick={closeNav}
        className="absolute top-8 right-[1.4rem] w-8 h-8 sm:w-8 sm:h-6" />  
       </div>
    </div>
  )
}

export default MobileNav

import {Link} from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

function Header(){
    const [isOpen , setIsOpen] = useState(false) ;
    return(
        <header className="fixed bg-neutral-900 top-0 left-0 right-0 text-white text-sm">
            <nav className="flex justify-between py-2 px-6">
                <div className='text-4xl font-extrabold tracking-wideset hover:scale-105 transition-transform duration-300 text-red-300 py-2 hidden md:flex px-0 lg:px-8'><Link to={"/"}>SafeAura</Link></div>

                <button className='md:hidden text-2xl transition-transform duration-300 hover:scale-110' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX/> : <FiMenu/> }
                </button>

                <ul className={`md:flex justify-start bg-neutral-900 w-1/2 h-full font-extrabold space-x-4 lg:space-x-12 absolute md:static md:bg-transparent py-4 transition-all duration-500 ease-in-out left-0 top-16 ${
                    isOpen ? "block-opacity-100" : "hidden opacity-0 md:opacity-100"
                }`}>
                    <li className='hover:text-red-200 transition-all duration-300 hover:scale-105 border-b md:border-none border-gray-700 px-4 py-4 md:px-0 md:py-0' ><Link to={"/safetyRoutes"}>Safety Routes</Link></li>
                    <li className='hover:text-red-200 transition-all duration-300 hover:scale-105 border-b md:border-none border-gray-700 px-4 py-4 md:px-0 md:py-0' ><Link to={"/guardianMode"}>Guardian Mode</Link></li>
                    <li className='hover:text-red-200 transition-all duration-300 hover:scale-105 border-b md:border-none border-gray-700 px-4 py-4 md:px-0 md:py-0' ><Link to={"/emergency"}>Emergency</Link></li>
                    <li className='hover:text-red-200 transition-all duration-300 hover:scale-105 border-b md:border-none border-gray-700 px-4 py-4 md:px-0 md:py-0' ><Link to={"/mentalSupport"}>Mental Support</Link></li>
                </ul>
                <div className={`text-4xl font-extrabold tracking-wideset hover:scale-105 transition-transform duration-300 text-red-300 py-2 md:hidden`}><Link to={"/"}>SafeAura</Link></div>

                <div className='flex space-x-4 py-2'>
                    <Link to={"/login"} className='px-4 py-2 border-2 border-red-300 text-red-300 rounded-md font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-red-300 hover:text-white hover:scale-110 h-10'>Login</Link>
                    <Link to={"/signUp"} className='px-4 py-2 border-2 border-red-300 text-red-300 rounded-md font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-red-300 hover:text-white hover:scale-110 h-10'>SignUp</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header ;
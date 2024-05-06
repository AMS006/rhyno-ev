import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between h-24 md:px-6 px-2.5 bg-[#202020]">
            <div className='flex'>
                <img src={logo} className='sm:w-72 w-48 sm:h-32 h-24  -mt-4' />
            </div>
            <div className='sm:flex hidden gap-12 items-center'>
                <ul className='flex text-white font-bold'>
                    <li className='mx-4'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/products'>Products</NavLink>
                    </li>

                    <li className='mx-4'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    {/* <li className='mx-4'>
                        <NavLink to='/services'>Compare All</NavLink>
                    </li> */}
                    <li className='mx-4'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>

                <div className='flex gap-4 font-bold text-white'>
                    <a href='https://www.linkedin.com/in/' target='_blank'>
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <FaInstagram size={24} />
                    </a>
                </div>

            </div>

            <div className='sm:hidden block'>
                <button onClick={() => setOpen(!isOpen)} className='text-white'>
                    {isOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden absolute top-24 left-0 w-full bg-[#202020]`}>
                <ul className='flex flex-col justify-end gap-2.5 text-white font-bold py-4'>
                    <li className='mx-4'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/products'>Products</NavLink>
                    </li>

                    <li className='mx-4'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

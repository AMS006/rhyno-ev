// Footer of the home page:
// ● Privacy policy
// ● Refund policy
// ● Website policy
// ● Contact us
// ● Products
// ● Career(redirect to linkedin page of the compay)
// ● Rentals
// ● Instagram icon to redirect to instagram page
// ● Linkedin icon to redirect to linkedin page
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="flex items-center justify-center md:h-24 px-6 bg-[#202020]">
            <div className='flex  gap-12 items-center'>
                <ul className='flex md:flex-nowrap flex-wrap gap-2.5 py-4 text-white font-bold '>
                    <li className='mx-4'>
                        <Link to='/'>Privacy policy</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/about'>Refund policy</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/'>Website policy</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/'>Career</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/'>Rentals</Link>
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
        </footer>

    )
}

export default Footer

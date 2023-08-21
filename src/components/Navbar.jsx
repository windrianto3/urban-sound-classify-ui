import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='z-10 flex fixed w-full h-[80px] bg-blue-500 items-center justify-between px-4'>
            <div>
                <h3 className='font-bold text-white ps-4'> Urban Sound Classifier</h3>
            </div>

            <ul className=' text-white flex'>
                <li>
                    <Link to='/urban-sound-classifier'> Home </Link>
                </li>
                <li>
                    <Link to='/urban-sound-classifier/about'> About </Link>
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Navbar
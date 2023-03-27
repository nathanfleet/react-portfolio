import { MenuOutlined, Close } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <div className="fixed w-full text-white flex justify-between px-4 items-center">
      <Link to='/'>
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </Link>
      <nav>
        <ul className="hidden md:flex md:gap-8 md:p-6 md:uppercase bg-white/10">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Projects</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>

        {active ? (
          <ul className="md:hidden flex-col flex left-1/4 inset-0 fixed uppercase items-center justify-center p-8 backdrop-blur-lg gap-8 bg-black/40">
            <Close onClick={toggleMenu} className="cursor-pointer" />
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Projects</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
        ) : (
          <div className="md:hidden">
            <MenuOutlined onClick={toggleMenu} className="cursor-pointer" />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar

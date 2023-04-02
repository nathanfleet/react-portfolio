import { MenuOutlined, Close } from '@material-ui/icons'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <div className="fixed w-full text-black flex justify-between px-4 items-center bg-white">

      <div className="flex items-center">
      <Link to='/'
      onClick={() => {
        window.scrollTo(0, 0);
      }}>
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </Link>
      <span className="ml-2 text-xl">Nathan</span>
      </div>

      <nav>
        <ul className="hidden md:flex md:gap-8 md:p-6 md:uppercase">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-blue-400">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {active ? (
          <ul className="md:hidden flex-col flex left-1/4 inset-0 fixed uppercase items-center justify-center p-8 backdrop-blur-lg gap-8 text-white">
            <Close onClick={toggleMenu} className="cursor-pointer" />
            {navLinks.map((link) => (
              <li key={link.id} className="hover:text-blue-400">
                <a href={`#${link.id}`} onClick={toggleMenu}>
                  {link.title}
                </a>
              </li>
            ))}
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
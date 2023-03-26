import { MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className="fixed w-full text-white flex justify-between px-4 items-center">
      <div>
        logo
      </div>

      <nav>
        <div className="md:hidden">
          <MenuOutlined onClick={showMenu} />
        </div>

        <ul className={`md:flex md:gap-8 md:p-6 md:uppercase bg-white/10 ${active ? 'block' : 'hidden'}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

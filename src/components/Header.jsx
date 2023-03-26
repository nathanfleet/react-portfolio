import { MenuOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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

            <div className>
                <MenuOutlined onClick={showMenu}/>
            </div>

            <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>


            
        </nav>

    </div>
  )
}

export default Header
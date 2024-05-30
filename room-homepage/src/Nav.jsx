import logo from './assets/logo.svg'
import hamburger from './assets/icon-hamburger.svg'
import close from './assets/icon-close.svg'

const Nav = () => {
    return (
        <nav>
            <img 
                src={hamburger} 
                alt="menu" 
                className='btn-menu'
            />
            <img 
                src={logo} 
                alt="room logo"
                className='room-logo' 
            />
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;
import logo from './assets/logo.svg'
import hamburger from './assets/icon-hamburger.svg'
import close from './assets/icon-close.svg'

const Nav = ({open, setOpen}) => {
    return (
        <nav>
            <img 
                src={(!open) ? hamburger : close} 
                alt="menu" 
                className='btn-menu'
                onClick={() => setOpen(!open)}
            />
            <img 
                src={logo} 
                alt="room logo"
                className='room-logo' 
            />
            <ul style={open ? {top: '0px'} : {top: '-110px'}}>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Nav;
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
                <li tabIndex={1}>
                    <span>home</span>
                    <div className="border"></div>    
                </li>
                <li tabIndex={2}>
                    <span>shop</span>
                    <div className="border"></div>    
                </li>
                <li tabIndex={3}>
                    <span>about</span>
                    <div className="border"></div>    
                </li>
                <li tabIndex={4}>
                    <span>contact</span>
                    <div className="border"></div>    
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
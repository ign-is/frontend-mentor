import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

function ToggleButton({open, setOpen}) {
    return (
        <img 
            src={open ? close : hamburger} 
            alt="toggle menu" 
            className="btn-toggle"
            onClick={() => setOpen(!open)}
        />
    )
}

export default ToggleButton;
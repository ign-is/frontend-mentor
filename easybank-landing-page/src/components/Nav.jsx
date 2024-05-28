import logo  from '../assets/logo.svg';
import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';

function Nav({open, setOpen}) {
    return (
        <nav>
            <div className='container-nav'>
                <img src={logo} alt="easybank logo" />
                <ul style={open ? {top: '90px'} : {top: '-300px'}}>
                    <li>
                      <span>Home</span>
                      <div className="border"></div>
                    </li>
                    <li>
                      <span>About</span>
                      <div className="border"></div>
                    </li>
                    <li>
                      <span>Contact</span>
                      <div className="border"></div>
                    </li>
                    <li>
                      <span>Blog</span>
                      <div className="border"></div>
                    </li>
                    <li>
                      <span>Careers</span>
                      <div className="border"></div>
                    </li>
                </ul>
                <Button />
                <ToggleButton open={open} setOpen={setOpen} />
            </div>
        </nav>
    )
}

export default Nav;
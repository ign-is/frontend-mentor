import logo  from '../assets/logo.svg';
import Button from '../components/Button';

function Nav() {
    return (
        <nav>
            <div className='container'>
                <img src={logo} alt="easybank logo" />
                <ul>
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
            </div>
        </nav>
    )
}

export default Nav;
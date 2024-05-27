import logo from '../assets/logo-footer.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'
import Button from './Button'

function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <div className="left">
                    <img src={logo} alt="easybank logo" />
                    <div className="social">
                        <img src={facebook} alt="facebook" />
                        <img src={youtube} alt="youtube" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
                <div className="center">
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="right">
                    <Button />
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
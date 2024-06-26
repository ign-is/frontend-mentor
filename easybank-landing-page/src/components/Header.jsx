import Button from "./Button";
import introDesktop from "../assets/bg-intro-desktop.svg";
import introMobile from '../assets/bg-intro-mobile.svg';
import phones from "../assets/image-mockups.png";

function Header() {
    return (
        <header>
            <div className="container-header">
                <div className="title-cta">
                    <h1>Next generation digital banking</h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button />
                </div>
                <img 
                    src={introDesktop} 
                    alt="colorful design"
                    className="bg-intro-desktop" 
                />
                <img 
                    src={introMobile} 
                    alt="colorful design"
                    className="bg-intro-mobile" 
                />
                <img 
                    src={phones} 
                    alt="Phones" 
                    className="phones"
                />
            </div>
        </header>
    )
}

export default Header;
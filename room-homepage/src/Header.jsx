import { useState, useEffect } from 'react'
import Nav from './Nav'
import angleLeft from './assets/icon-angle-left.svg'
import angleRight from './assets/icon-angle-right.svg'
import arrow from './assets/icon-arrow.svg'
import desktopHeroOne from './assets/desktop-image-hero-1.jpg';
import desktopHeroTwo from './assets/desktop-image-hero-2.jpg';
import desktopHeroThree from './assets/desktop-image-hero-3.jpg';
import mobileHeroOne from './assets/mobile-image-hero-1.jpg'
import mobileHeroTwo from './assets/mobile-image-hero-2.jpg'
import mobileHeroThree from './assets/mobile-image-hero-3.jpg'

const Header = ({open, setOpen}) => {
    const [count, setCount] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const desktopImages = [desktopHeroOne, desktopHeroTwo, desktopHeroThree];
    const mobileImages = [mobileHeroOne, mobileHeroTwo, mobileHeroThree];

    const slides = [
        {
          title: "Discover innovative ways to decorate",
          content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
          img: 0
        },
        {
          title: "We are available all across the globe",
          content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
          img: 1
        },
        {
          title: "Manufactured with the best materials",
          content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology   to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          img: 2
        }
    ];
    
    const handleSlider = (num) => {
        if(num == -1) {
            setCount(2);
        } else if(num == 3) {
            setCount(0);
        } else {
            setCount(num);
        }
    }


    const handleResize = () => {
        if (window.innerWidth <= 766) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <header>
            <div 
                className="header-left"
                style={isMobile ? 
                    {backgroundImage: `url(${mobileImages[count]})`} : 
                    {backgroundImage: `url(${desktopImages[count]})`}
                }>
                <Nav open={open} setOpen={setOpen}/>
                <div className="overlay" 
                style={open ? 
                    {display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '2'} : 
                    {display: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', zIndex: '-1'}
                }>
                </div>
                <div className='arrows'>
                    <div 
                        className="angle-left"
                        onClick={() => handleSlider(count - 1)}    
                    >
                        <img 
                            src={angleLeft} 
                            alt="left arrow" 
                        />
                    </div>
                    <div 
                        className="angle-right"
                        onClick={() => handleSlider(count + 1)}    
                    >
                        <img 
                            src={angleRight}
                            alt="right arrow" 
                        />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <h1>{slides[count].title}</h1>
                <p>{slides[count].content}</p>
                <button className='btn-shop'>
                    <span>shop now</span>
                    <img 
                        src={arrow} 
                        alt="arrow-shop" 
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;
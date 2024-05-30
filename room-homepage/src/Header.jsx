import Nav from './Nav'
import angleLeft from './assets/icon-angle-left.svg'
import angleRight from './assets/icon-angle-right.svg'
import arrow from './assets/icon-arrow.svg'

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <Nav />
                <div className='arrows'>
                    <div 
                        className="angle-left"
                        onClick={() => console.log('left')}    
                    >
                        <img 
                            src={angleLeft} 
                            alt="left arrow" 
                        />
                    </div>
                    <div 
                        className="angle-right"
                        onClick={() => console.log('right')}    
                    >
                        <img 
                            src={angleRight}
                            alt="right arrow" 
                        />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <h1>Discover innovative ways to decorate</h1>
                <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                </p>
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
import aboutDark from './assets/image-about-dark.jpg'
import aboutWhite from './assets/image-about-light.jpg'

const About = () => {
    return (
        <div className="about">
            {/* <div className="left-container"> */}
                <div className="about-left">
                    {/* <img 
                        src={aboutDark} 
                        alt="dark living room" 
                    /> */}
                </div>
                <div className="about-center">
                    <h2>About our furniture</h2>
                    <p>Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
            {/* </div> */}
            <div className="about-right">
                {/* <img 
                    src={aboutWhite} 
                    alt="white chair" 
                /> */}
            </div>
        </div>
    )
}

export default About;
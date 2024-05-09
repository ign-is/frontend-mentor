import { useState, useEffect } from 'react'
import dice from './assets/icon-dice.svg';
import dividerDesktop from './assets/pattern-divider-desktop.svg';
import dividerMobile from './assets/pattern-divider-mobile.svg';

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    quote: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  })

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json();

      setAdvice({
          ...advice, 
          id: data.slip.id,
          quote: data.slip.advice
        })
      
    } catch(error) {
      console.error('Error', error);
    }
  };

  const handleFetch = () => {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <article className="center">
        <p className="num">Advice #<span>{advice.id}</span></p>
        <q>{advice.quote}</q>
        <img 
          src={dividerDesktop}
          alt="divider"
          className="img-desktop"
        />
        <img  
          src={dividerMobile}
          alt="divider"
          className="img-mobile"
        />
        <button 
          className="dice center"
          onClick={handleFetch}
        >
          <img 
            src={dice}
            alt="dice"
          />
        </button>
      </article>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App

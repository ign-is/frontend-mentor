import { useState, useEffect } from 'react'
import User from './components/User';
import Boxes from './components/Boxes';

function App() {
  const [trackData, setTrackData] = useState(null)
  const [timeFrame, setTimeFrame] = useState(['weekly', 'Last Week']);


  const handleTime = (time) => {
    let last;

    if (time === 'weekly') {
      last = 'Last Week';
    } else if (time === 'daily') {
      last = 'Yesterday';
    } else {
      last = 'Last Month';
    }

    setTimeFrame([time, last])
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();

      setTrackData(data);
      
    } catch(error) {
      console.error('Error', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='grid'>
        <User handleTime={handleTime} timeFrame={timeFrame}/>
        <Boxes trackData={trackData}  timeFrame={timeFrame}/>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App

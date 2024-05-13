import image from '../assets/image-jeremy.png';

const User = ({handleTime, timeFrame}) => {

    return (
        <div className="user">
            <div className="user-profile">
                <img src={image} alt="Jeremy image"/>
                <div className="right">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <ul className="time">
                <li 
                    className={timeFrame[0] === 'daily' ? 'clicked' : ''}
                    onClick={() => handleTime('daily')} 
                >
                    Daily
                </li>
                <li 
                    className={timeFrame[0] === 'weekly' ? 'clicked' : ''}
                    onClick={() => handleTime('weekly')} 
                >
                    Weekly
                </li>
                <li 
                    className={timeFrame[0] === 'monthly' ? 'clicked' : ''}
                    onClick={() => handleTime('monthly')}     
                >
                    Monthly
                </li>
            </ul>
      </div>
    );
}

export default User;
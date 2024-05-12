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
                    onClick={() => handleTime('daily')} 
                    style={timeFrame[0] === 'daily' ? {color: 'white'} : {color: '#bdc1ff'}}>
                    Daily
                </li>
                <li 
                    onClick={() => handleTime('weekly')} 
                    style={timeFrame[0] === 'weekly' ? {color: 'white'} : {color: '#bdc1ff'}}>
                    Weekly
                </li>
                <li 
                    onClick={() => handleTime('monthly')} 
                    style={timeFrame[0] === 'monthly' ? {color: 'white'} : {color: '#bdc1ff'}}>
                    Monthly
                </li>
            </ul>
      </div>
    );
}

export default User;
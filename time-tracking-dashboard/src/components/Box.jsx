import elipsis from '../assets/icon-ellipsis.svg'
// import Work from '../assets/icon-work.svg'
// import Study from '../assets/icon-study.svg'
// import Social from '../assets/icon-social.svg'
// import Self from '../assets/icon-self-care.svg'
// import Play from '../assets/icon-play.svg'
// import Exercise from '../assets/icon-exercise.svg'

const Box = ({data, timeFrame}) => {

    return (
        <div className={`box ${data.title.toLowerCase()}`}>
            <img src={`/src/assets/icon-${data.title.toLowerCase()}.svg`} alt={data.title} />
            <div className="inner-box">
                <div className="top">
                <div className="title">{data.title}</div>
                <img 
                    src={elipsis} 
                    alt="menu-elipsis" 
                    className="elipsis" />
                </div>
                <div className="hours">
                <div className="current">{data.timeframes[timeFrame[0]].current}<span>hrs</span></div>
                <div className="previews">
                    <p>
                        <span className="ago">{timeFrame[1]}</span>&nbsp;
                        <span className="hour">{` - ${data.timeframes[timeFrame[0]].previous}hrs`}</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
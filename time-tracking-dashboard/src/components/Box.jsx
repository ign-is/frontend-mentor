import elipsis from '../assets/icon-ellipsis.svg'

const Box = ({data, timeFrame}) => {

    return (
        <div className={`box ${data.title.toLowerCase()}`}>
            <img 
                src={
                data.title.split(' ').length > 1 ? 
                `/src/assets/icon-${data.title.toLocaleLowerCase().split(' ').join('-')}.svg` : 
                `/src/assets/icon-${data.title.toLowerCase()}.svg`
                } 
                alt={data.title} 
            />
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
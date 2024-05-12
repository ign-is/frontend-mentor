import Box from './Box';

const Boxes = ({trackData, timeFrame}) => {

    return (
        <>
            {trackData?.map((data) => (
                <Box
                    key={data.title}
                    data={data}
                    timeFrame={timeFrame}
                />
            ))}
        </>
    )
}

export default Boxes;
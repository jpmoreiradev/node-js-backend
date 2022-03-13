const axios = require('axios');
// import axios from 'axios';

const getEndPoint = async () => {
    
    const {data: result} = await axios.get(`https://api.sportradar.com/basketball/trial/v2/br/schedules/live/timelines_delta.json?api_key=${apikey}`)
    
    return result

}

const startTime = async () => {
    const {sport_event_timeline_deltas: endPoint} = await getEndPoint();
    
    const mapTime = endPoint.map(time => time.sport_event_timeline.start_time );
    // const mapTimeBrasil = mapTime.map(time => time.toLocaleTimeString('pt-BR',{ hour12: false }));

    // console.log(mapTime;

    return mapTime

}

const mapTimeBrasil = async () => {
    const mapTime = await startTime();
    // const timeBrasil = mapTime.map(item => item.toLocaleTimeString('pt-Br', {
    //         hour12: false
    //     }));
    //     console.log(timeBrasil)
    console.log(mapTime)
    }



mapTimeBrasil();
import axios from 'axios';

const OPEN_API_KEY = 'dbb07104e6afb5ec76fe497647ee1ebc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ' + request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
};

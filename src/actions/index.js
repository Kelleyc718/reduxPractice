import axios from 'axios';

const OPEN_API_KEY = 'API_KEY';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};

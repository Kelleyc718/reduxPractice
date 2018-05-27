import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer_weather';

const rootReducer = combineReducers({
  weatherReducer : WeatherReducer
});

export default rootReducer;

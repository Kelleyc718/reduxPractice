import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/map';


class WeatherList extends Component {
    renderWeather(cityData) {
        if (cityData == null) {
            return 'City not found.';
        }
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp => (temp * (9 / 5) - 459.67)));
        const pressures = cityData.list.map(pressure => pressure.main.pressure);
        const humidity = cityData.list.map(humidity => humidity.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="purple" units="˚F"/>
                </td>
                <td>
                    <Chart data={pressures} color="red" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="blue" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (˚F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weatherReducer.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({weatherReducer}) => {
    return {weatherReducer};
};

export default connect(mapStateToProps)(WeatherList)
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import PropTypes, {object} from "prop-types";

import "../styles/City.css";
import axios from "axios";

import Weather from "./Weather"

const API_KEY = "c20e17cb7d6f16b05a5ecdf5d087ddb9";

function City(props) {
    const [weather, showWeather] = useState();
    const [type, setType] = useState("")


    async function handleClick(city, t) {
        let lat = city['coords']['lat']
        let lon = city['coords']['lon']
        setType(t);
        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${API_KEY}`).then(res => {
            showWeather(res.data[t]);

            console.log(res.data[t]);

            });
    }
    return (
        <React.Fragment>
            <tr>
                <td>{props.city.name}</td>
                <td><Button variant="info" onClick={() => handleClick(props.city, 'minutely')}>Сейчас</Button></td>
                <td><Button variant="info" onClick={() => handleClick(props.city, 'hourly')}>Ближайшие два дня</Button></td>
                <td><Button variant="info" onClick={() => handleClick(props.city, 'daily')}>На этой неделе</Button></td>
            </tr>
                {weather ?
                    weather.map(weather => <Weather weather={weather} type={type}/>):
                    <td> </td>
                }
        </React.Fragment>
    )
}

City.propTypes = {
    city: PropTypes.object
};

export default City;

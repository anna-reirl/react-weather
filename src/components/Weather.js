import React from "react";
import Button from "react-bootstrap/Button";

let months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']

function temperature(props){
    if (props.type === 'hourly'){
        return props.weather['temp']
    }
    else {
        return props.weather['temp']['day']
    }
}

function Weather(props){
    let date = new Date(props.weather['dt'] * 1000)
    return (
        <React.Fragment>
            <tr>
                {props.type === 'minutely' ?
                    <td>Дата: {months[date.getMonth()]}, {date.getDay()} {date.getHours()}:{date.getMinutes()}</td>:
                    <td>Дата: {months[date.getMonth()]}, {date.getDay()} {date.getHours()}:00</td>
                }
                {props.type === 'minutely' ?
                    <td>Объем осадков:
                        {props.weather ?
                            <td>{`${props.weather['precipitation']} мм`}</td>:
                            <td> </td>
                        }</td>:
                    <td>Температура:
                        {props.weather ?
                            <td>{`${Math.floor(temperature(props) - 273)}°C`}</td>:
                            <td> </td>
                        }</td>


                }

            </tr>
        </React.Fragment>
    )
}

export default Weather;

import React from 'react';
import Icon from '../IconComponent';
import './weatherDisplay.css';

function WeatherDisplay(props){
    console.log(props.data)
    return(
        <div className="weather-wrapper">
            <h3>Current Weather:</h3>
            <p>{ props.data.main} </p>
            <Icon icon={props.data.icon}/>
        </div>
    )
}
export default WeatherDisplay;
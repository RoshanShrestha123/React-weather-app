import React from 'react';
import Icon from '../iconComponent/IconComponent';
import './weatherDisplay.css';

function WeatherDisplay(props){
    let kel_to_cel = props.temp - 273.15;
    return(
        <div className="weather-wrapper">
            <div className="temp-wrapper">
            <Icon icon={props.data.icon}/>
                <h1 className="temp">{kel_to_cel} 	&#8451;   </h1>
                
            </div>
           
            
            <h3>{props.data.main} </h3>
            <span className="desc">"{props.data.description}"</span>
        </div>
    )
}
export default WeatherDisplay;
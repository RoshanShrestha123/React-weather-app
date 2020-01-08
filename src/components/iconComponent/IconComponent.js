import React from 'react';
import './iconComponent.css';

function IconComponent(props){
    let iconId = props.icon;
    let image="http://openweathermap.org/img/wn/"+iconId+".png";
    return(
        <div className="icon-holder">
            <img className="icon" alt={iconId} src={image}></img>
        </div>
    )
}
export default IconComponent;
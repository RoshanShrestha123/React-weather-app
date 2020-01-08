import React from 'react';

function IconComponent(props){
    let iconId = props.icon;
    return(
        <img alt={iconId} src={"http://openweathermap.org/img/wn/"+iconId+".png"}></img>
    )
}
export default IconComponent;
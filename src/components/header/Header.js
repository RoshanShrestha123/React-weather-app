import React from 'react';
import './Header.css';

function Header(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDate= new Date().getDay();
 
    return (

            <div className="header">
            <h3 className="location"> Kathmandu</h3>
            <h3 className="time">{days[currentDate]}</h3>
            
        </div>
        
   
        
        
    )
}
export default Header;
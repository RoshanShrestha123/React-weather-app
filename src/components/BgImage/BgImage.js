import React,{ Component} from 'react';
import mistNight from '../../assects/mist-night.png'
import './BGImage.css';

class BgImage extends Component{
    render(){
        return(
            <div className="bgImage">
                <img src={mistNight}/>
            </div>
            
        )
    }
}
export default BgImage;
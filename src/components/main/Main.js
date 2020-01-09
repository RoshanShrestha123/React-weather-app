import React,{ Component}from 'react';
import Weather from '../weather-display/WeatherDisplay';
import Header from '../header/Header';
import './Main.css';
import BgImage from '../BgImage/BgImage';

class Main extends Component{
    constructor(){
        super();
        this.state={
            data:null,
            dataLoaded:false
        }
    }
    componentDidMount(){
        const KEY = 'd31f12047476d77a5e4c35ccaaa10fed';
        const KATHMANDU_ID =  '1283240';
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + KATHMANDU_ID+ '&appid=' + KEY)
            .then(response => response.json())
            .then(data => {this.setState({
                data:data,
                dataLoaded:true
            })
        });
    }

    render(){
        let newdata = null;
        if(this.state.dataLoaded){
            console.log(this.state.data)
            newdata = this.state.data.weather.map(weatherData => {
                return(
                    <Weather key={weatherData.id} data={weatherData} temp={this.state.data.main.temp}/>  
                    )
            })
           
        }else{
            return(
                <p>Loading..</p>
            )
            
        }
        return(
            <div className="main-wrapper">
                <BgImage/>
                <Header/>
                
                {newdata}
                
            </div>
            
        )
        
    }
}
export default Main;

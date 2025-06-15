import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",   
    feelsLike: 308.44,
    humidity: 27,
    temp:309.03,
    tempMax :309.03,
    tempMin:309.03,
    weather:"clear sky"
})

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    )
}
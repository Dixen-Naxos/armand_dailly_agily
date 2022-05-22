import React from "react";
import axios from "axios";

function Today(props){
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png"
    //<img src={icon} alt="icone"/>
    return (
        <div>
            <div>
                <div>{icon}</div>
                <div>{props.data.dt}</div>
            </div>
            <div>
                <div>{props.data.temp_day}°C</div>
                <div>{props.data.pressure}hPa</div>
            </div>
            <div>
                <div>{props.data.temp_night}°C</div>
                <div>{props.data.wind_speed}Km/h</div>
            </div>
            <div>{props.data.humidity}%</div>
        </div>)

}

export default Today;
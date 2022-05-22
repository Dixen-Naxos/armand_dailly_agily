import React from "react";

function Today(props) {
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png"
    //<img src={icon} alt="icone"/>
    return (
        <div className="left">
            <div className="day">
                <div>
                    <div className="left">{icon}</div>
                    <div className="right">{props.data.dt}</div>
                </div>
                <div>
                    <div className="left">Jour - {props.data.temp_day}°C</div>
                    <div className="right">Pression - {props.data.pressure}hPa</div>
                </div>
                <div>
                    <div className="left">Nuit - {props.data.temp_night}°C</div>
                    <div className="right">Vent - {props.data.wind_speed}Km/h</div>
                </div>
                <div>Humidité - {props.data.humidity}%</div>
            </div>
        </div>)

}

export default Today;
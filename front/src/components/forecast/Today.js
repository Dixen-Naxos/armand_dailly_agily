import React from "react";
import {Link} from "react-router-dom";

function Today(props) {
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png";
    const date = new Date(props.data.dt * 1000);
    //<img src={icon} alt="icone"/>
    return (
        <div className="left">
            <Link className={"black"} to="/">Retour</Link>
            <div className="day">
                <div className={"image-card"}>
                    <div className="left"><img src={icon} alt="icone"/></div>
                    <div className="right">{date.toLocaleDateString("fr-FR")}</div>
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
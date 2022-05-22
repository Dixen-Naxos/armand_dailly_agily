import React from "react";

function Day(props) {
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png"
    const date = new Date(props.data.dt * 1000);
    //<img src={icon} alt="icone"/>
    return (
        <div className="day">
            <div><img src={icon} alt="icone"/> {date.toLocaleDateString("fr-FR")} {props.data.temp_day} °C</div>
        </div>)
}

export default Day;
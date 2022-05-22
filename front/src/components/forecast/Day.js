import React from "react";

function Day(props) {
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png"
    //<img src={icon} alt="icone"/>
    return (
        <div className="day">
            <div>{icon} {props.data.dt} {props.data.temp_day} °C</div>
        </div>)
}

export default Day;
import React from "react";

function Day(props) {
    const icon = "https://openweathermap.org/img/wn/" + props.data.icon + "@4x.png"
    //<img src={icon} alt="icone"/>
    return (
        <div>
            <div>{icon}</div>
            <div>{props.data.dt}</div>
            <div>{props.data.temp_day} °C</div>
        </div>)
}

export default Day;
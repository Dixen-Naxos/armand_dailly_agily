import React from "react";
import axios from "axios";

function Today(props){
    return (
        <div>
            <div>
                <div>image</div>
                <div>{props.data.temp_day}</div>
            </div>
            <div>
                <div>{props.data.temp_day}</div>
                <div>{props.data.pressure}</div>
            </div>
            <div>
                <div>{props.data.temp_night}</div>
                <div>{props.data.wind_speed}</div>
            </div>
            <div>{props.data.humidity}</div>
        </div>)

}

export default Today;
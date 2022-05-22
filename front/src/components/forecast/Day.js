import React from "react";

function Day(props) {
    return (
        <div>
            <div>image</div>
            <div>{props.data.dt}</div>
            <div>{props.data.temp_day}</div>
        </div>)
}

export default Day;
import React from "react";
import Day from "./Day";

function Week(props) {
    return (
        <div className="right">
            <Day data={props.data[1]}/>
            <Day data={props.data[2]}/>
            <Day data={props.data[3]}/>
            <Day data={props.data[4]}/>
            <Day data={props.data[5]}/>
            <Day data={props.data[6]}/>
            <Day data={props.data[7]}/>
        </div>)
}

export default Week;
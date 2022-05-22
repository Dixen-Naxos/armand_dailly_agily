import React from "react";
import Day from "./Day";
import Today from "./Today";

function Week(props) {
    return (
        <div>
            <Today data={props.data[1]}/>
            <Today data={props.data[2]}/>
            <Today data={props.data[3]}/>
            <Today data={props.data[4]}/>
            <Today data={props.data[5]}/>
            <Today data={props.data[6]}/>
            <Today data={props.data[7]}/>
        </div>)
}

export default Week;
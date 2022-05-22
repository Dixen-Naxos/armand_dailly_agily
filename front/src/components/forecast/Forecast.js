import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Today from "./Today";
import Week from "./Week";


function Forecast() {
    const [data, setData] = useState({});
    let {city_name} = useParams();
    const url = `http://127.0.0.1:3001/meteo/${city_name}`
    axios.get(url).then((response) => {
        setData(response.data);
    });
    if (data["week"]) {
        return (<div>
            <Today data={data["week"][0]}/>
            <Week data={data["week"]}/>
        </div>);
    }
}

export default Forecast;
import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Today from "./Today";


const Forecast = async () => {
    const [data, setData] = useState({});
    let {city_name} = useParams();
    const url = `http://127.0.0.1:3001/meteo/${city_name}`
    await axios.get(url).then((response) => {
        setData(response.data)
    });
    console.log(data["week"]);
    return (<div><Today/></div>);

}

export default Forecast;
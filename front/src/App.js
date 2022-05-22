import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Forecast from "./components/forecast/Forecast";

export default function App() {


    return (
        <Router>
            <div>

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/forecast/:city_name" element={<Forecast />}/>
                </Routes>

            </div>
        </Router>
    );
}

function Home() {
    const [location, setLocation] = useState('');

    return (
        <div className="App">
            <h1>The Forecast Weather App</h1>
            <div className="search">
                <input value={location}
                       onChange={event => setLocation(event.target.value)}
                       placeholder='Enter Location'
                       type="text"/>
            </div>
            <Link to={`/forecast/${location}`}>Forecast</Link>
        </div>

    );
}
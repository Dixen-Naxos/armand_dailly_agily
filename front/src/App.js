import React, {useState} from 'react'
import axios from "axios";

function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=db988691faf182dfc3750cd1e57f3718`
    //const url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5073219&lon=-0.1276474&exclude=minutely,hourly,alerts&units=metric&appid=db988691faf182dfc3750cd1e57f3718'

    const searchLocation = (event) => {
        if(event.key === 'Enter') {
            axios.get(url).then((response)=>{
                setData(response.data)
                console.log(data[0])
            })
        }
    }

    return (
        <div className="App">
            <div className="search">
                <input value={location}
                       onChange={event => setLocation(event.target.value)}
                       onKeyPress={searchLocation}
                       placeholder='Enter Location'
                       type="text"/>
            </div>
            <h1>The Forecast Weather App</h1>
            <main>

            </main>
            <footer>
                Page created by Armand DAILLY
            </footer>
        </div>
    );
}

export default App;


//const url = 'https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=db988691faf182dfc3750cd1e57f3718'
//result[0]["lat"]
//result[0]["lon"]

//const url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5073219&lon=-0.1276474&exclude=minutely,hourly,alerts&units=metric&appid=db988691faf182dfc3750cd1e57f3718'
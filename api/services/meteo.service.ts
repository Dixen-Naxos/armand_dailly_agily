import axios from "axios";
import {MeteoProps} from "../props";

export class MeteoService {
    private static instance?: MeteoService;

    public static getInstance(): MeteoService {
        if (MeteoService.instance === undefined) {
            MeteoService.instance = new MeteoService();
        }
        return MeteoService.instance;
    }

    private constructor() {

    }

    async getGeoPos(city_name: string): Promise<any | null> {
        const urlGeoPos = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=db988691faf182dfc3750cd1e57f3718`;
        return axios.get(urlGeoPos).then((response) => {
            return {"lat": response.data[0].lat, "lon": response.data[0].lon};
        });
    }

    async getWeather(lat: number, lon: number): Promise<any> {
        const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=db988691faf182dfc3750cd1e57f3718`;
        return axios.get(urlWeather).then((response) => {
            const weather = response.data;
            return this.cleanResult(weather);
        });
    }


    async cleanResult(obj: any) {
        try {
            const result: { week: [Partial<MeteoProps>] } = {
                "week": obj.daily.map(function (element: { dt: number; weather: [{ icon: string; }]; temp: { day: number; night: number; }; pressure: number; humidity: number; wind_speed: number; }) {
                    if (element.dt !== obj.daily[0].dt) {
                        return{
                            "dt": element.dt,
                            "icon": element.weather[0].icon,
                            "temp_day": element.temp.day
                        };
                    } else {
                        return {
                            "dt": element.dt,
                            "icon": element.weather[0].icon,
                            "pressure": element.pressure,
                            "humidity": element.humidity,
                            "wind_speed": element.wind_speed,
                            "temp_day": element.temp.day,
                            "temp_night": element.temp.night
                        };
                    }
                })
            };
            return result;
        }catch (e) {
            console.log(e);
        }
    }
}
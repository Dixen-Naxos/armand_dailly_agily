export interface MeteoProps {
    dt: number;
    icon: string;
    pressure?: number;
    humidity?: number;
    wind_speed?: number;
    temp_day: number;
    temp_night?: number;
}
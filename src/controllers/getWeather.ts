import axios from "axios";

const getWeather = async (cityInfo:any) => {
    
    
        const params:any = {
            q: cityInfo,
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        };
    
        const resp = await axios.get(`${process.env.BASEURL_OWD}/weather?q=${params.q}&appid=${params.appid}&units=${params.units}&lang=${params.lang}`);
        const { dt, main, weather, clouds, wind, id, name, coord, sys, timezone } = resp.data;

        return {
            city: {
                id,
                name,
                coord,
                country: sys.country,
                timezone,
                sunrise: sys.sunrise,
                sunset: sys.sunset
            },
            dt,
            main,
            weather: weather[0],
            clouds

        };
}  
export {
    getWeather
}
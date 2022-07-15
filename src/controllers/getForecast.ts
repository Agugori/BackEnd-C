import axios from "axios";

const getForecast = async (cityInfo:any) => {
    
    try {
        const params:any = {
            q: cityInfo,
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        };
    
        const resp = await axios.get(`${process.env.BASEURL_OWD}/forecast?q=${params.q}&appid=${params.appid}&units=${params.units}&lang=${params.lang}`);
        const {city, list} = resp.data;
    
        return {
            city,
            list
        };
    } catch (error) {
        console.log(error);
    }
}

export {
    getForecast
}
import { request, response } from "express";
import accents from 'remove-accents';

import {getCity} from "./getCity.js";
import { getForecast } from "./getForecast.js";
import { getWeather } from "./getWeather.js";



const getLocation = async (req = request, res = response) => {
    try {
        const ip = await getCity();
        res.status(200).json({
            ip
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}

const getCurrentLocation = async (req = request, res = response) => {
    let { city } = req.params;
    
    let ip:any;

    try {
        if(!city) {
            ip = await getCity();
            city = accents(ip.city);
        }

        const openWeatherMap = await getWeather(accents(city));
        if(openWeatherMap){
            return res.status(200).json({
                openWeatherMap
            });
        }
        res.status(404).json({
            msg: 'Ciudad no encontrada'
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
}

const getForecastCurrentCity = async (req = request, res = response) => {
    let { city } = req.params;
    
    let ip:any;

    try {
        if(!city) {
            ip = await getCity();
            city = accents(ip.city);
        }

        const openWeatherMap = await getForecast(accents(city));
        if(openWeatherMap){
            return res.status(200).json({
                openWeatherMap
            });
        }
        res.status(404).json({
            msg: 'Ciudad no encontrada'
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
}

export {
    getLocation,
    getCurrentLocation,
    getForecastCurrentCity
}
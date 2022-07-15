var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { request, response } from "express";
import accents from 'remove-accents';
import { getCity } from "./getCity.js";
import { getForecast } from "./getForecast.js";
import { getWeather } from "./getWeather.js";
const getLocation = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = yield getCity();
        res.status(200).json({
            ip
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
});
const getCurrentLocation = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    let { city } = req.params;
    let ip;
    try {
        if (!city) {
            ip = yield getCity();
            city = accents(ip.city);
        }
        const openWeatherMap = yield getWeather(accents(city));
        if (openWeatherMap) {
            return res.status(200).json({
                openWeatherMap
            });
        }
        res.status(404).json({
            msg: 'Ciudad no encontrada'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
});
const getForecastCurrentCity = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    let { city } = req.params;
    let ip;
    try {
        if (!city) {
            ip = yield getCity();
            city = accents(ip.city);
        }
        const openWeatherMap = yield getForecast(accents(city));
        if (openWeatherMap) {
            return res.status(200).json({
                openWeatherMap
            });
        }
        res.status(404).json({
            msg: 'Ciudad no encontrada'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
});
export { getLocation, getCurrentLocation, getForecastCurrentCity };
//# sourceMappingURL=geoLocation.js.map
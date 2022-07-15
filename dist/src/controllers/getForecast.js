var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const getForecast = (cityInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            q: cityInfo,
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        };
        const resp = yield axios.get(`${process.env.BASEURL_OWD}/forecast?q=${params.q}&appid=${params.appid}&units=${params.units}&lang=${params.lang}`);
        const { city, list } = resp.data;
        return {
            city,
            list
        };
    }
    catch (error) {
        console.log(error);
    }
});
export { getForecast };
//# sourceMappingURL=getForecast.js.map
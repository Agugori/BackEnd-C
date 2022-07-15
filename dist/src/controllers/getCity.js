var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { publicIpv4 } from 'public-ip';
const getCity = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = publicIpv4();
        const ipCity = yield axios.get(`${process.env.BASEURL_IPAPI}/${ip}`);
        return ipCity.data;
    }
    catch (error) {
        return { error };
    }
});
export { getCity };
//# sourceMappingURL=getCity.js.map
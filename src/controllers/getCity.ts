import axios from 'axios';
import publicIp from 'public-ip';


const getCity = async () => {
    try {
        // const ip = publicIp.v4();
        const ip = '24.48.0.1';
        const ipCity = await axios.get(`${process.env.BASEURL_IPAPI}${ip}`)
        return ipCity.data;
    } catch (error) {
        return {error}
    }
}
export {
    getCity
} 

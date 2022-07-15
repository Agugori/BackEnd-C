import axios from 'axios';
import  {publicIpv4}  from 'public-ip';
const getCity = async () => {
    try {
        const ip = publicIpv4();
        const ipCity = await axios.get(`${process.env.BASEURL_IPAPI}/${ip}`)
        return ipCity.data
    } catch (error) {
        return { error };
    }
}
export {
    getCity
} 

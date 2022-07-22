import axios from 'axios';
import publicIp from 'public-ip';


export async function getCity() {
    try {
        const ip = await publicIp.v4();

        const api = await axios.get(`${ process.env.BASEURL_IPAPI}/${ ip }`);

        return api.data;
    } catch (error) {
        return {error}
    }
}
 

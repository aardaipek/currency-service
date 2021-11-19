import axios from 'axios';
import config from '../config';


const getExchangeData = async (source) => {
    const url = config[source].api;
    console.log(url);
    // try {
    //     const resp = await axios.get(url);
    //     console.log(resp.data);
    // } catch (err) {
    //     // Handle Error Here
    //     console.error(err);
    // }
};

export default { getExchangeData }

import axios from 'axios';
import config from '../config';


const getExchangeBinanceData = async () => {
    try {
        const result = await axios.get(config.binance.api);
        return JSON.stringify(result.data);
    } catch (err) {
        throw new Error(err);
    }
};

const getExchangeGateData = async () => {
    try {
        const result = await axios.get(config.gate.api);
        return JSON.stringify(result.data);
    } catch (err) {
        throw new Error(err);
    }
};

export default { getExchangeBinanceData,getExchangeGateData }

import axios from 'axios';
import config from '../config';

export const getAll = async () => {
    try {
        const result = await axios.get(config.binance.api);
        return JSON.stringify(result.data);
    } catch (err) {
        throw new Error(err);
    }
};
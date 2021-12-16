import dotenv from 'dotenv';

dotenv.config();

const gate = {
    api: process.env.GATE_API_URL
};

const binance = {
    api: process.env.BINANCE_API_URL
};

const collections = {
    currencyCollection: process.env.CURRENCY_COLLECTION
}


export default { gate,binance,collections };
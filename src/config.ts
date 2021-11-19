import dotenv from 'dotenv';
import firebaseApp from 'firebase';

dotenv.config();

const gate = {
    api: process.env.GATE_API_URL
};

const binance = {
    api: process.env.BINANCE_API_URL
};

// Firebase
const {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID } = process.env;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
}

const appInitialize = firebaseApp.initializeApp(firebaseConfig);


export default { gate,binance,appInitialize };
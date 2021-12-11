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
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID } = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
}

const appInitialize = firebaseApp.initializeApp(firebaseConfig);


export default { gate,binance,appInitialize };
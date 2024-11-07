// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// eslint-disable-next-line no-undef
const apiKey = process.env.apiKey;
// eslint-disable-next-line no-undef
const authDomain = process.env.authDomain;
// eslint-disable-next-line no-undef
const projectId = process.env.projectId;
// eslint-disable-next-line no-undef
const storageBucket = process.env.storageBucket;
// eslint-disable-next-line no-undef
const messagingSenderId = process.env.messagingSenderId;
// eslint-disable-next-line no-undef
const appId = process.env.appId;
// eslint-disable-next-line no-undef
const measurementId = process.env.measurementId;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
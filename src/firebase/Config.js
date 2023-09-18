// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1Eq1EkTPpT-_Yu5myuDse9DWX4Dp8JD8",
  authDomain: "master-uz-674f4.firebaseapp.com",
  projectId: "master-uz-674f4",
  storageBucket: "master-uz-674f4.appspot.com",
  messagingSenderId: "1048811212420",
  appId: "1:1048811212420:web:7512bc87d2dc297813fcd1",
  measurementId: "G-6MZV8JG6G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
})

export default app;
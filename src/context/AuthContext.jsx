import { View, Text } from 'react-native'
import React from 'react';
import {  createContext,useState,useEffect} from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth/react-native';

export const Auth = createContext();

export default function AuthContext({children}) {
    const [isLoggedIn,setIsLoggedin] = useState(false);

    const data = {
        isLoggedIn,
        auth:getAuth()
    }

    useEffect(() => {
        onAuthStateChanged(getAuth(),(user) => {
            if (user) {
                setIsLoggedin(true)
            }else{
                setIsLoggedin(false)
            }
        })
    },[getAuth])

  return (
   <Auth.Provider value={data}>
       {children}
   </Auth.Provider>
  )
}
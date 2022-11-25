import React, { createContext, useState } from 'react';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import authApp from '../firebase/firebaseAuth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const navigation = useNavigation();
    return(
        <AuthContext.Provider
        value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await signInWithEmailAndPassword(authApp,email, password)// signes user in to app
            .then(UserCredential => {
                setUser(UserCredential.user);// gives the user variable the credential
                navigation.navigate("Home");
              });
          } catch (e) {
            console.log(e)
            Alert.alert('wrong credentials')//Alerting the user that the credentials are wrong
          }
        },
        register: async (email, password) => {
          try {
            await createUserWithEmailAndPassword(authApp,email, password);// registers user to the app
            navigation.navigate("Home")
          } catch (e) {
            console.log(e);
            console.log('could not register ')
          }
        },
       
      }}
    >
      {children}
    </AuthContext.Provider>
    )
}
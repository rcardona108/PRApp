import { useEffect, useState,useContext, createContext } from 'react';
import {View,TextInput,Button, StyleSheet, SafeAreaView,Text, TouchableOpacity} from 'react-native';
import auth from '../firebase/firebaseAuth'
import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import getUserInfo from '../firebase/getUserInfo';
import {  AuthProvider } from '../navigation/AuthProvider';
import SubmitLogIn from '../Components/submitLogIn.js';
import SubmitRegister from '../Components/submitRegister';
const providerValue = 'working'
const otherValue = 'other value'
export const UserContext = createContext();
const AuthScreen = () => {
    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(user=>{
    //         if(user){
    //             navigation.navigate("Home")
    //         }
    //     })
    //     return unsubscribe
    // },[])
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <View style = {{backgroundColor:'grey',height:'100%',width:'100%'}}>
        <SafeAreaView>
        <View style = {styles.inputContainor}>{/** input for email and password */}
            <TextInput 
                style = {styles.emailInput}
                value = {email}
                placeholder='email'
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style = {styles.passwordInput}
                value = {password}
                placeholder='Password'
                onChangeText={text => setPassword(text)}
            />
        </View>
        <View style = {styles.authContainor}>
            <AuthProvider>
                <SubmitLogIn email={email}password={password} />{/**allows user to log in. useContext is used to save user state */}

                <SubmitRegister email={email}password={password}/>{/**allows user to register. useContext is used to save user sate */}
            </AuthProvider>

        </View>
        </SafeAreaView>
        </View>
    )
};
const styles = StyleSheet.create({
    inputContainor:{
        marginHorizontal:'25%',
        marginTop:300
    },
    emailInput:{
        width:200,
        height:40,
        borderColor:'black',
        borderWidth:3
    },
    passwordInput:{
        width:200,
        height:40,
        borderColor:'black',
        borderWidth:3,
        marginTop:10,
    },
    authContainor:{
        marginHorizontal:'40%',
        marginTop:20
    },
    LogInButton:{
        width:80,
        height:30,
        backgroundColor:'black',
        alignItems:'center'
    },
    RegisterButton:{
        width:80,
        height:30,
        backgroundColor:'black',
        alignItems:'center',
    }
});
export default AuthScreen;

import { useEffect, useState,useContext, createContext, } from 'react';
import {View,TextInput,Button, StyleSheet, SafeAreaView,Text, TouchableOpacity, Pressable} from 'react-native';
import auth from '../firebase/firebaseAuth'
import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import getUserInfo from '../firebase/getUserInfo';
import {  AuthProvider } from '../navigation/AuthProvider';
import SubmitLogIn from '../Components/AuthFolder/submitLogIn';
import SubmitRegister from '../Components/AuthFolder/submitRegister';
import { useTogglePasswordVisibility } from '../Components/BasicButtons/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const providerValue = 'working'
const otherValue = 'other value'

export const UserContext = createContext();
const AuthScreen = () => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
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
        <View style = {{backgroundColor:'#141212',height:'100%',width:'100%'}}>
        <SafeAreaView>
        <View style = {styles.inputContainer}>{/** input for email and password */}
            <TextInput 
                style = {styles.emailInput}
                value = {email}
                placeholderTextColor= 'grey'
                placeholder='Email'
                autoCorrect = {false}
                autoCapitalize='none'
                onChangeText={text => setEmail(text)}
            />
            
            <TextInput
               style = {styles.passwordInput}
                value = {password}
                placeholderTextColor= 'grey'
                autoCorrect = {false}
                autoCapitalize='none'
                placeholder='Password'
                secureTextEntry={passwordVisibility}
                onChangeText={text => setPassword(text)}
                
                
            />
            
            
            
        </View>
        <View style = {styles.eyeIcon}>
            <Pressable onPress={handlePasswordVisibility} styles = {{marginTop:30}}>
                <MaterialCommunityIcons name={rightIcon} size={22} color='white' />
            </Pressable>
        </View>
        
        
        <View style = {styles.authContainer}>
            <AuthProvider>
                <SubmitLogIn email={email}password={password} />{/**allows user to log in. useContext is used to save user state */}
                </AuthProvider>
                

        </View>
        <View style = {styles.textContainer}>
        <Text style = {{color: 'white', fontSize: 15,}}>Don't have an account?</Text>
        </View>
        <View style = {styles.authContainer}>
            
                
                <AuthProvider>
                <SubmitRegister/>{/**allows user to register. useContext is used to save user sate */}
            </AuthProvider>
        </View>

        </SafeAreaView>
        </View>
    )
};
const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:'20%',
        marginTop:250,
        
    },
    textContainer:{
        justifyContent:"center",
        marginHorizontal: 113,
        marginTop:10,
        
        
    },
    emailInput:{
        color: 'white',
        width:250,
        height:50,
        borderColor:'#9B9A9A',
        borderWidth:3,
        textAlign:'center',
        borderRadius:10,
        fontSize:25,
        
        
       
    },
    passwordInput:{
        color: 'white',
        
        width:250,
        height:50,
        borderColor:'#9B9A9A',
        borderWidth:3,
        marginTop:10,
        textAlign:'center',
        borderRadius:10,
        fontSize:25,
        
    },
    authContainer:{
        marginHorizontal:'40%',
        marginTop:20
    },
    LogInButton:{
        width:80,
        height:30,
        backgroundColor:'#9B9A9A',
        alignItems:'center'
    },
    RegisterButton:{
        width:80,
        height:30,
        backgroundColor:'#9B9A9A',
        alignItems:'center',
    },
    eyeIcon:{
        marginLeft:'87%',
        marginTop:-33,
    }
});
export default AuthScreen;
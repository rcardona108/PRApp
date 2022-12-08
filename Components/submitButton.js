import React,{useContext} from "react";
import { TouchableOpacity, View,StyleSheet, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {  AuthProvider, AuthContext} from '../navigation/AuthProvider';
import db from "../firebase/firestore";
import getCurrentDate from "../appFunctions/getCurrentDate";
import { getIdToken } from "firebase/auth";
const SubmitRegisterButton = ({email,password,FirstName,LastName}) => {
    const Navigation = useNavigation();
    const value = useContext(AuthContext);
    

    return(
<TouchableOpacity
    style = {styles.submitButton}
    onPress = {
        ()=> {value.register(email, password,FirstName,LastName); Navigation.goBack();}
        
    }
>
  
  <Text style = {{color:'black', fontWeight:'bold', marginTop:18, fontSize:25}}>
         Submit
    </Text>
</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    submitButton:{
        width:150,
        height:70,
        backgroundColor:'#9B9A9A',
        alignItems:'center',
    
        borderColor:'white',
        borderWidth:2,
        marginBottom:4,
        borderRadius:40,
        marginTop:60,
        marginHorizontal: '30%',
    
      },
});
export default SubmitRegisterButton;
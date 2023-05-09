import React,{useContext} from "react";
import { TouchableOpacity, View,StyleSheet, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {  AuthProvider, AuthContext} from '../../navigation/AuthProvider';
import db from "../../firebase/firestore";
import getCurrentDate from "../../appFunctions/getCurrentDate";
import { getIdToken } from "firebase/auth";


const DateSearchButton = ({date}) => {
    return(
        <TouchableOpacity
        style = {styles.button}
        //onPress ={
            
        //}
        >
        <Text style = {{color:'black', fontSize:15, marginTop:2,}}>
         Submit
        </Text>
    </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button:{
        width:90,
        height:27,
        backgroundColor:'#9B9A9A',
        alignItems:'center',
        borderRadius:25,
        borderColor:'white',
        marginTop: -38,
        marginLeft: 260,
        borderWidth:2,
        
        
    },
});
export default DateSearchButton;
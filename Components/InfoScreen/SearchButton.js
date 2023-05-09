import React,{useContext} from "react";
import { TouchableOpacity, View,StyleSheet, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {  AuthProvider, AuthContext} from '../../navigation/AuthProvider';
import db from "../../firebase/firestore";
import getCurrentDate from "../../appFunctions/getCurrentDate";
import { getIdToken } from "firebase/auth";


const DateSearchButton = ({date}) => {
    
}
const styles = StyleSheet.create({

});
export default DateSearchButton;
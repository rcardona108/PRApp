import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, } from "react-native";
import ExerciseInformationScreen from "../Screens/ExerciseInformation";


const ExerciseInfoButton = () => {
    const Navigation = useNavigation();
    return(
        <View style = {styles.InfoButton}>
        <TouchableOpacity 
        onPress = {
            () => {Navigation.navigate('ExerciseInformationScreen');}
            
            }>
        <Text style = {styles.textStyle}>
            i
        </Text>
        </TouchableOpacity>
        </View>



    )
}

const styles = StyleSheet.create({
    InfoButton:{
        borderRadius:100,
        borderColor:'#141212',
        borderWidth:2,
        height: 40,
        width:40,
        alignItems:'center',
        marginLeft: 245,
        marginTop: 15,
        marginBottom:-40,
        backgroundColor: '#9B9A9A',
    },
    textStyle:{
        marginTop:2,
        color:'white',
        fontSize: 25,


    },
});

export default ExerciseInfoButton;
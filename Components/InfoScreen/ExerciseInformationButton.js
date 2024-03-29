import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, } from "react-native";
import ExerciseInformationScreen from "../../Screens/ExerciseInformation";
import Store from "../../redux/Store";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import SetExerciseNameInfo from "../../redux/Actions/SetExerciseNameInfo";
import SetExerciseNameInfoReducer from "../../redux/Reducers/SetExercisenameInfoReducer";


const ExerciseInfoButton = ({Exercise}) => {
    const dispatch = useDispatch();
    const Navigation = useNavigation();
    
    return(
        <View style={styles.InfoButton}>
        <TouchableOpacity
      style={styles.container}
      onPress={() => {dispatch(SetExerciseNameInfo(Exercise));
        Navigation.navigate('ExerciseInformationScreen' ,{Exercise});
      }} //Opens the Information screen and sets the Redux Variable to the exercise that is passed
    >
      
        <Text style={styles.textStyle}>i</Text>
      
    </TouchableOpacity>
    </View>



    );
};

const styles = StyleSheet.create({
    InfoButton:{
        borderRadius:100,
        borderColor:'#141212',
        borderWidth:2,
        height: 40,
        width:40,
        alignItems:'center',
        marginLeft: 245,
        marginTop: 40,
        marginBottom:-40,
        backgroundColor: '#9B9A9A',
    },
    textStyle:{
        marginTop:-2,
        color:'white',
        fontSize: 23,


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 7,
        
      },
});

export default ExerciseInfoButton;
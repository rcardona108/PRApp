import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,LayoutAnimation } from "react-native";
import { useContext, useState,useEffect } from "react";
import { PrContext } from "../appFunctions/PrContext";
/**
 * 
 * @returns button that navigates to the a modal to select an exercise
 */
 if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
     
const SelectExerciseButton = () => {
    const value = useContext(PrContext)
    const navigation = useNavigation();
    
 
    return(
      
            <View style = {styles.background}>
                <Text style = {styles.Text}> {value.exercise} </Text>
            </View>
        
    );
};

styles = StyleSheet.create({
    background:{
        backgroundColor: '#9B9A9A',
        width: 335,
        borderRadius:41,
        alignItems:'center',
        marginHorizontal:25,
        height:200,
        justifyContent:'center'
    },
    Text:{
        fontWeight:'bold',
        fontSize:40,
        color:'white',
        alignItems:'center'

    }
})
export default SelectExerciseButton;